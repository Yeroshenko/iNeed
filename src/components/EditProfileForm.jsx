import React from 'react'
import { Modal, Form, Input } from 'antd'

const EditProfileForm = ({ visible, toggleShowForm }) => {
  const [form] = Form.useForm()

  return (
    <Modal
      visible={visible}
      title='Настройки профиля'
      okText='Сохранить'
      cancelText='Отменить'
      onCancel={toggleShowForm}
    >
      <Form form={form} layout='vertical' name='userForm'>
        <Form.Item name='nickname' label='Никнейм'>
          <Input placeholder='Введите свой никнейм' />
        </Form.Item>
        <Form.Item name='email' label='E-mail'>
          <Input placeholder='Введите новый E-mail' />
        </Form.Item>
        <Form.Item name='password' label='Пароль'>
          <Input placeholder='Введите новый пароль' />
        </Form.Item>
        <Form.Item name='password' label='Повторите пароль'>
          <Input placeholder='Повторно введите новый пароль' />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default EditProfileForm
