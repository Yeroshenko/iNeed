import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Alert } from 'antd'

import { required, min, isEmail } from 'utils'
import { MailOutlinedIcon, LockOutlinedIcon } from 'icons'

export const LoginForm = ({
  hasError,
  isLoading,
  className,
  onSubmit,
  clearError
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

    <Form.Item>
      <Button type='primary' htmlType='submit' loading={isLoading}>
        Войти
      </Button>
    </Form.Item>
    <Link to='/register' onClick={clearError}>
      <Button type='link'>Зарегистрироваться</Button>
    </Link>
  </Form>
)