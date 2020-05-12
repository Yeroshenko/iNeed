import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Alert } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'

import { required, min, confirm } from 'utils/inputValidate'

const RegisterForm = ({ onSubmit, error, loading, className }) => (
  <Form
    name='register-form'
    className={cn('auth-form', className)}
    onFinish={onSubmit}
    size='large'
  >
    {error && (
      <Form.Item>
        <Alert message={error} type='error' showIcon />
      </Form.Item>
    )}

    <Form.Item name='email' rules={[required('Введите пожалуста ваш email!')]}>
      <Input prefix={<MailOutlined />} type='email' placeholder='E-mail' />
    </Form.Item>
    <Form.Item
      name='password'
      hasFeedback
      rules={[
        required('Введите пожалуста ваш пароль!'),
        min(6, 'Минимум 6 символов')
      ]}
    >
      <Input.Password
        prefix={<LockOutlined />}
        type='password'
        placeholder='Пароль'
      />
    </Form.Item>

    <Form.Item
      name='re-password'
      hasFeedback
      rules={[
        required('Повторите пожалуста ваш пароль!'),
        confirm('password', 'Пароли не совпадаю')
      ]}
    >
      <Input.Password
        prefix={<LockOutlined />}
        type='password'
        placeholder='Повторите пароль'
      />
    </Form.Item>

    <Form.Item>
      <Button type='primary' htmlType='submit' loading={loading}>
        Зарегистрироваться
      </Button>
    </Form.Item>
    <Link to='/login'>
      <Button type='link'>Есть аккаунт</Button>
    </Link>
  </Form>
)

export default RegisterForm
