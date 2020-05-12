import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Alert } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'

import { required, min } from 'utils/inputValidate'

const LoginForm = ({ onSubmit, error, loading, className }) => (
  <Form
    name='login-form'
    className={cn('auth-form', className)}
    onFinish={onSubmit}
    size='large'
  >
    {error && (
      <Form.Item>
        <Alert message={error} type='error' showIcon />{' '}
      </Form.Item>
    )}

    <Form.Item name='email' rules={[required('Введите пожалуста ваш email!')]}>
      <Input prefix={<MailOutlined />} type='email' placeholder='E-mail' />
    </Form.Item>
    <Form.Item
      name='password'
      rules={[
        required('Введите пожалуста ваш пароль!'),
        min(6, 'Минимальная длина пароля 6 символов')
      ]}
    >
      <Input.Password
        prefix={<LockOutlined />}
        type='password'
        placeholder='Пароль'
      />
    </Form.Item>

    <Form.Item>
      <Button type='primary' htmlType='submit' loading={loading}>
        Войти
      </Button>
    </Form.Item>
    <Link to='/register'>
      <Button type='link'>Зарегистрироваться</Button>
    </Link>
  </Form>
)

export default LoginForm
