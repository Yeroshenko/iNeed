import React from 'react'
import { Modal, Form, Input, Avatar, Spin } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { InputFile } from 'components'
import 'styles/components/EditProfileForm.sass'

const EditProfileForm = ({
  visible,
  cancelModal,
  currentAvatar,
  isUploading,
  uploadAvatar,
  clearAvalar,
  formInstance,
  submitModal,
  initialValues,
  initailAvatar
}) => (
  <Modal
    visible={visible}
    title='Настройки профиля'
    cancelText='Отменить'
    okText='Сохранить'
    onCancel={cancelModal}
    onOk={submitModal}
  >
    <Form
      form={formInstance}
      className='edit-profile-form'
      layout='vertical'
      name='userForm'
      initialValues={initialValues}
    >
      <Form.Item name='displayName' label='Никнейм'>
        <Input placeholder='Введите новый никнейм' />
      </Form.Item>

      <Form.Item name='photoURL' label='Аватар'>
        <div className='edit-profile-form__upload'>
          <Spin className='edit-profile-form__spin' spinning={isUploading}>
            <Avatar
              className='edit-profile-form__avatar'
              shape='square'
              size='large'
              icon={<UserOutlined />}
              src={currentAvatar ? currentAvatar : initailAvatar}
            />
          </Spin>
          <InputFile
            id='userAvatar'
            accept='.png, .jpg, .jpeg'
            setFile={uploadAvatar}
            cleareFile={clearAvalar}
          >
            Загрузить новую автарку
          </InputFile>
        </div>
      </Form.Item>
    </Form>
  </Modal>
)

export default EditProfileForm
