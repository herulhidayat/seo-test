import Button from '@app/components/Button/Button';
import UnlockIcon from '@app/components/Icons/UnlockIcon';
import UserIcon from '@app/components/Icons/UserIcon';
import FormInputControl from '@app/components/Input/FormInputControl';
import LogoImage from '@app/components/Logo/LogoImage';
import { LogoContainer } from '@app/styled/logo.styled';
import {
  Copyright,
  InputIcon,
  LabelForm,
  LoginForm,
  LoginFormBox,
  LoginFormContainer,
  LoginIntroText,
  WelcomeText,
} from '@app/styled/sginin.styled';
import { Forgot } from '@app/styled/signin.styled';
import { camelCase } from 'lodash';
import React, { useState } from 'react';
import { Alert, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function LoginDefultLayout({
  errMessage,
  handleSubmit,
  onSubmitHandler,
  register,
  errors,
  isLoading,
}: ILoginDefaultLayout) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { workspace } = useSelector((state: any) => state.app);

  const colorTheme = workspace?.application?.colorTheme || process.env.APP_ALIAS;
  const backgroundStyle = workspace?.application?.backgroundStyle || 'bg-1';
  const bg = `/static/img/landing-page/${colorTheme}/${backgroundStyle}.png`
  
  return (
    <>
      <LoginFormContainer style={{backgroundImage: `url(${bg})`}}>
        <LoginFormBox>
          <LoginForm className='signin-form'>
            <LogoContainer className='mx-auto font-weight-light my-3'>
              <LogoImage logoColor='#fff' width='160'></LogoImage>
              <span className='desa signin'>{camelCase(workspace?.desakelurahan_details?.nama_kelurahan)}</span>
            </LogoContainer>
            <WelcomeText>Selamat datang</WelcomeText>
            <LoginIntroText>
              Silahkan login utk masuk ke aplikasi
            </LoginIntroText>

            {/* ERROR MESSAGE  */}
            {errMessage && (
              <Alert className='w-100 text-capitalize' variant={`danger`}>
                {errMessage}
              </Alert>
            )}
            {/* !END ERROR MESSAGE  */}

            <Form
              onSubmit={handleSubmit(onSubmitHandler)}
              className='w-100 mt-2'
            >
              <Form.Group controlId='formEmail' className='mb-3'>
                <LabelForm>Username</LabelForm>
                <InputGroup className='mb-3 mt-2'>
                  <InputIcon>
                    <UserIcon />
                  </InputIcon>
                  <FormInputControl
                    type='text'
                    className='ps-4'
                    formGroup={false}
                    register={register('username')}
                    isInvalid={errors?.username as boolean | undefined}
                    message={errors?.username?.message}
                    placeholder='Enter username'
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group controlId='formPassword'>
                <LabelForm>Password</LabelForm>
                <InputGroup className='mb-3 mt-2'>
                  <InputIcon>
                    <UnlockIcon />
                  </InputIcon>
                  <FormInputControl
                    type={showPassword ? 'text' : 'password'}
                    className='ps-4'
                    formGroup={false}
                    register={register('password')}
                    isInvalid={errors?.password as boolean | undefined}
                    message={errors?.password?.message}
                    placeholder='******'
                  />
                  <InputIcon
                    className='cursor-pointer pt-2'
                    style={{ right: '0', cursor: 'pointer' }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: `<i class='fal fa-eye${
                          !showPassword ? '-slash' : ''
                        }'></i>`,
                      }}
                    ></span>
                  </InputIcon>
                </InputGroup>
              </Form.Group>
              <Row>
                <Form.Group as={Col}>
                  <Form.Check
                    type='checkbox'
                    label='Ingat saya?'
                    {...register('rememberMe')}
                    disabled={isLoading}
                  />
                </Form.Group>
                <Form.Group as={Col} className='text-right'>
                  <Forgot className='cursor-pointer'>Lupa password?</Forgot>
                </Form.Group>
              </Row>
              <Button
                variant='primary'
                type='submit'
                className='w-100 font-weight-bold mt-3 text-white'
                isLoading={isLoading}
                style={{ minHeight: '3.5rem' }}
              >
                {isLoading ? 'Masuk...' : 'Selanjutnya'}
              </Button>
            </Form>
          </LoginForm>

          <Copyright className='text-center'>
            &copy; 2022 · Ebdesk Technology · All rights reserved
          </Copyright>
        </LoginFormBox>
      </LoginFormContainer>
    </>
  );
}

interface ILoginDefaultLayout {
  errMessage:any;
  handleSubmit:any;
  onSubmitHandler:any;
  register:any;
  errors:any;
  isLoading:boolean;
}
