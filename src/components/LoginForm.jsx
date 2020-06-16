import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Alert, Tooltip } from 'antd'

import { required, min, isEmail } from 'utils'
import {
  MailOutlinedIcon,
  LockOutlinedIcon,
  GithubIcon,
  GoogleIcon,
  FacebookIcon
} from 'icons'

export const LoginForm = ({
  hasError,
  isLoading,
  className,
  onSubmit,
  clearError,
  githubLogin,
  facebookLogin,
  googleLogin
}) => (
  <Form
    name='login-form'
    className={cn('auth-form', className)}
    onFinish={onSubmit}
    size='large'
  >
    {hasError && (
      <Form.Item>
        <Alert message={'Пользователь не найден'} type='error' showIcon />
      </Form.Item>
    )}

    <Form.Item
      name='email'
      rules={[
        required('Введите пожалуста ваш email!'),
        isEmail('Введите коректный E-mail')
      ]}
    >
      <Input prefix={<MailOutlinedIcon />} type='email' placeholder='E-mail' />
    </Form.Item>
    <Form.Item
      name='password'
      rules={[
        required('Введите пожалуста ваш пароль!'),
        min(6, 'Минимальная длина пароля 6 символов')
      ]}
    >
      <Input.Password
        prefix={<LockOutlinedIcon />}
        type='password'
        placeholder='Пароль'
      />
    </Form.Item>

    <div className='auth-form__btn-wrap'>
      <Button
        type='primary'
        className='auth-form__btn'
        htmlType='submit'
        loading={isLoading}
      >
        Войти
      </Button>
    </div>

    <div className='auth-form__social-auth'>
      <Tooltip title={'Войти с помощью Github'}>
        <Button shape='circle' icon={<GithubIcon />} onClick={githubLogin} />
      </Tooltip>
      <Tooltip title={'Войти с помощью Google'}>
        <Button shape='circle' icon={<GoogleIcon />} onClick={googleLogin} />
      </Tooltip>
      <Tooltip title={'Войти с помощью Facebook'}>
        <Button
          shape='circle'
          icon={<FacebookIcon />}
          onClick={facebookLogin}
        />
      </Tooltip>
    </div>

    <Link to='/register' onClick={clearError}>
      <Button type='link' className='auth-form__btn'>
        Зарегистрироваться
      </Button>
    </Link>
  </Form>
)
