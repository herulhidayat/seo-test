import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { addNotification } from '@app/store/notification/notification.action'
import { notificationTemplate } from '@app/helper/notificationTemplate'

import { uploadImage } from '@app/services/cdnUpload.service'
import LazyImage from '../LazyLoad/LazyImage'

const FormUploadImage: React.FC<{
  field: string
  setValue: any
  pathImage: string
  defaultImage?: string
  accept?: string
  folder?: string
  prefix?: string
  preview?: boolean
  clickInputFile?: any
  clickInputFileCallback?: any
  alertInfo?:boolean
  uploading?:boolean
}> = ({
  field,
  setValue,
  pathImage,
  defaultImage = '',
  accept = 'image/png, image/jpg, image/jpeg, image/svg+xml',
  folder = process.env.APP_ALIAS,
  prefix = '',
  preview = true,
  clickInputFile,
  clickInputFileCallback,
  alertInfo=false,
}) => {
  const dispatch = useDispatch()
  const source = axios.CancelToken.source()

  const refUploadImage = useRef<any>()
  const [browseFile, setBrowseFile] = useState<any>()
  const [previewImage, setPreviewImage] = useState({
    file: undefined,
    base64: null,
  })

  useEffect(() => {
    setBrowseFile(clickInputFile)
  }, [clickInputFile])

  const uploadImageCDN = async (file: any) => {
    await new Promise((resolve) => setTimeout(resolve, 300))

    try {
      const formData: any = new FormData()
      formData.append('file', file)
      formData.append('root', process.env.UPLOAD_ROOT_DIR)
      formData.append('folder', folder)
      formData.append('prefix', prefix)

      const req = await uploadImage(formData, source.token) 
      setValue(field, req.data)
      setPreviewImage({
        file: undefined,
        base64: null,
      })
      if(alertInfo){
        dispatchNotification(`Success upload image`, 'success')
      }
    } catch (err: any) {
      dispatchNotification(`Failed upload image`, 'danger')
    }
  }

  const onChangeImage = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      const reader: any = new FileReader()
      reader.onload = () => {
        setPreviewImage((prevState: any) => ({
          ...prevState,
          base64: reader.result,
          file: file,
        }))

        uploadImageCDN(file)
      }
      reader.readAsDataURL(file)
    }
    setBrowseFile(false)
    if (clickInputFileCallback) {
      clickInputFileCallback(false)
    }
  }


  /** NOTIFICATION HANDLER */
  const dispatchNotification = (msg: string = '', type: string = '') => {
    const notification = notificationTemplate(msg, type)
    dispatch(addNotification({ ...notification, message: msg, type: type }))
  }

  useEffect(() => {
    if (browseFile) {
      refUploadImage.current.click()
    }
  }, [browseFile])

  return (
    <>
      {(preview && (pathImage || previewImage.base64)) && (
        <LazyImage
          onClick={() => refUploadImage.current.click()}
          src={previewImage.base64 || `${process.env.CDN}${pathImage}`}
          defaultImage={defaultImage}
          className="w-100 cursor-pointer"
          style={{borderRadius:'.5rem'}}
        />
      )}

      <input ref={refUploadImage} onChange={onChangeImage} type="file" accept={accept} hidden />
    </>
  )
}

export default FormUploadImage
