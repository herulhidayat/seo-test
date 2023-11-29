import { downloadBlob } from '@app/services/main-v1.service'
import { useSelector } from 'react-redux'
import axios from 'axios'
import fileDownload from 'js-file-download'
import { get } from 'lodash'
import moment from 'moment'
import { useEffect, useState } from 'react'

export function createDownloadable(url: string) {
  const endpoint = `${process.env.API_BASE_URL}${url}`
  const link = document.createElement('a')
  link.href = endpoint
  link.target = '_blank'
  link.click()
}

export async function createDownloadableBlob({
  url,
  payload,
  source = axios.CancelToken.source(),
  setIsLoading = () => void 0,
}: {
  url: string
  payload: any
  source: any
  setIsLoading: (v: boolean) => void
}) {
  await new Promise((resolve) => setTimeout(resolve, 300))

  setIsLoading(true)
  try {
    let req: any = await downloadBlob({
      path: url,
      params: payload ? payload : {},
      sourceToken: source.token,
    })
    const dataBlob = req?.data
    const headers = req?.headers
    let content: string = headers['content-disposition']
    const filename = content.replace('attachment; filename=', '').replaceAll('"', '').split('.')

    fileDownload(dataBlob, `${get(filename, '0')}_${moment().unix()}.${get(filename, '1')}`)
    setIsLoading(false)
  } catch (err: any) {
    // catch here
    setIsLoading(false)
  }
}

export function useDownloadable() {
  const { activeFilters } = useSelector((state: any) => state.ui)

  const createUrl = (baseUrl: string) => {
    if (activeFilters) {
      const filters = activeFilters.filters.filter
      const genderFilter = filters.find((f: any) => f.field.indexOf('kelamin') > 0)

      return `${baseUrl}?gender_filter=${genderFilter.value}`
    }
    return baseUrl
  }

  const downloadFile = (baseUrl: string) => {
    const url = createUrl(baseUrl)
    createDownloadable(url)
  }

  return { downloadFile }
}

export function useDownloadableWithPayload() {
  const { activeFilters } = useSelector((state: any) => state.ui)
  const { workspace } = useSelector((state: any) => state.app)
  const source = axios.CancelToken.source()
  const [isLoading, setIsLoading] = useState(false)

  const createUrlAndPayload = (baseUrl: string) => {
    const defaultFilter = [{ field: 'workspaceId', value: workspace._id }]

    if (activeFilters) {
      const filters = [...defaultFilter, ...activeFilters?.filters?.filter, activeFilters?.filters?.range].filter((f) => f != null || f != undefined)

      console.log('filter', activeFilters, filters)
      return {
        url: baseUrl,
        payload: { orderBy: 'updated_at', order: 'DESC', filter: filters },
        source: source,
        setIsLoading,
      }
    }

    return {
      url: baseUrl,
      payload: { orderBy: 'updated_at', order: 'DESC', filter: defaultFilter },
      source: source,
      setIsLoading,
    }
  }

  const downloadFile = (baseUrl: string) => {
    createDownloadableBlob(createUrlAndPayload(baseUrl))
  }

  useEffect(() => {
    return () => {
      source.cancel()
    }
  }, [])

  return {
    downloadFile,
    isDownloadFileLoading: isLoading,
  }
}
