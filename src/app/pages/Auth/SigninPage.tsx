import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { loginUser, setLoggedInUserDetail, setPrivileges, setSessionLifetime } from '@app/store/reducers/auth'
import { connect, useDispatch, useSelector } from 'react-redux'
import { AuthLoginService } from '@app/services/auth.service'
import axios from 'axios'
import { getByIdController } from '@app/services/main-v1.service'
import { setThemeMode } from '@app/store/reducers/ui'
import LoginDefultLayout from '@app/modules/Login/LoginDefultLayout'

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

function SigninPage({ isLoggedIn }: any) {
  const source = axios.CancelToken.source()
  const { workspace } = useSelector((state: any) => state.app)

  // const navigate = useNavigate();
  const dispatch = useDispatch()
  const refUsername: any = useRef()

  const [isShowForm, setShowForm] = useState(false)
  const [errMessage, setErrorMessage] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [formModel] = useState<any>({
    username: '',
    password: '',
    rememberMe: false,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: formModel,
  })

  /** HANDLE ACTION LOGIN */
  const postSignin = async ({ username, password, rememberMe }: any) => {
    try {
      setLoading(true)
      const params = {
        username: username,
        password: password,
      }

      /** SIGNING IN */
      const req: any = await AuthLoginService({
        params: params,
        cancelToken: source.token,
      })

      const resUser = req?.user

      /** CHECKING WORKSPACE ACCESS */
      if (resUser?.workspaceId && workspace?._id != resUser?.workspaceId) {
        setLoading(false)
        setErrorMessage('Maaf, User tidak terdaftar')
        return false
      }

      /** SET USER STATE */
      dispatch(
        loginUser({
          access: req?.auth?.token,
          refresh: req?.auth?.token,
        }),
      )

      dispatch(setLoggedInUserDetail(resUser))

      /** SET THEME MODE */
      dispatch(setThemeMode('light'))

      /** REQUEST ROLE USER */
      const reqRole = await getByIdController('apps/role/get-one', resUser?.roleId, source.token)

      /** SET STATE PRIVILEGES */
      const resRole = reqRole?.data?.data
      dispatch(setPrivileges(resRole))
      dispatch(setSessionLifetime({ rememberMe: rememberMe }))
      setLoading(false)

      window.location.href = (workspace?.prefixPath ? `/${workspace?.prefixPath}` : '') + '/administrasi/buku/peraturan-desa'
    } catch (error: any) {
      setLoading(false)
      if (error?.response?.data?.message) {
        let errMsgApi = error?.response.data.message
        errMsgApi = errMsgApi === 'Data not found' ? 'Maaf User tidak terdaftar.' : errMsgApi
        errMsgApi = errMsgApi == 'incorrect Username or Password' ? 'Username dan password tidak sesuai' : errMsgApi
        setErrorMessage(errMsgApi)
      }
    }
  }

  const onSubmitHandler = (data: any) => {
    setLoading(true)
    postSignin(data)
  }

  useEffect(() => {
    if (isLoggedIn) {
      window.location.href = (workspace?.prefixPath ? `/${workspace?.prefixPath}` : '') + '/dashboard'
    } else {
      setShowForm(true)
    }

    if (refUsername.current) {
      refUsername.current.focus()
    }

    return () => {
      source.cancel()
    }
  }, [])

  if (isShowForm == false) {
    return <>{workspace?.application?.loginStyle}</>
  }

  if (workspace?.application?.loginStyle == undefined || workspace?.application?.loginStyle == 'login-1') {
    return (
      <LoginDefultLayout
        errMessage={errMessage}
        handleSubmit={handleSubmit}
        onSubmitHandler={onSubmitHandler}
        register={register}
        errors={errors}
        isLoading={isLoading}
      ></LoginDefultLayout>
    )
  } else {
    return <></>
  }
}

const mapStateToProps = (state: any) => ({
  isLoggedIn: state.auth?.isLoggedIn,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SigninPage)
