import requestApi from './api.service'

const getAll = (path: any = null, params: any = {}, sourceToken: any) => {
  return requestApi().request({
    url: path,
    method: 'GET',
    params: params,
    cancelToken: sourceToken, // <-- IMPORTANT!
  })
}

const getByIdRequest = ({ path, id, sourceToken, idParams }: IGetByIdRequest) => {
  return requestApi().request({
    url: `${path}${idParams ? '?id=' : '/'}${id}`,
    method: 'GET',
    cancelToken: sourceToken, // <-- IMPORTANT!
  })
}

const getAllRequest = ({ path, params = { page: 1, limit: 1000 }, sourceToken }: IServiceParams) => {
  return requestApi().request({
    url: `${path}`,
    method: 'GET',
    params: params,
    cancelToken: sourceToken, // <-- IMPORTANT!
  })
}

const postRequest = ({ path, params, sourceToken }: IServiceParams) => {
  return requestApi().post(
    `${path}`,
    params,
    { cancelToken: sourceToken }, // <-- IMPORTANT!
  )
}

const downloadBlob = ({ path, params, sourceToken }: IServiceParams) => {
  return requestApi(['headers', 'data']).request({
    url: path,
    method: 'POST',
    responseType: 'blob',
    data: params,
    cancelToken: sourceToken, // <-- IMPORTANT!
  })
}

const putRequest = ({ path, params, id, sourceToken }: IServiceParams) => {
  return requestApi().put(
    `${path}/${params?.id ? params?.id : id}`,
    params,
    { cancelToken: sourceToken }, // <-- IMPORTANT!
  )
}

const deleteRequest = ({ path, id, idParams = false, sourceToken }: IGetByIdRequest) => {
  return requestApi().request({
    url: `${path}${idParams ? '?id=' : ''}${id ? id : ''}`,
    method: 'DELETE',
    params: {},
    cancelToken: sourceToken, // <-- IMPORTANT!
  })
}

const getColorRange = ({ path, params, sourceToken }: IServiceParams) => {
  return requestApi().get(
    `${path}`,
    { cancelToken: sourceToken, headers: { body: JSON.stringify(params), Authorization: '' } }, // <-- IMPORTANT!
  )
}

interface IServiceParams {
  path: string
  params?: any
  sourceToken: any
  id?: any
}
interface IGetByIdRequest extends IServiceParams {
  idParams?: any
  id?: any
}

export { getAll, getAllRequest, getByIdRequest, postRequest, putRequest, deleteRequest, getColorRange, downloadBlob }
