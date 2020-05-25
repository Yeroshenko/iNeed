import React, { useState } from 'react'
import { Form, Input, Modal } from 'antd'

import { max } from 'utils/inputValidate'
import { PlusIcon } from 'icons'
import 'styles/components/ListCreator.sass'

const ListCreator = ({ featching, creteList }) => {
  const [createMode, setCreateMode] = useState(false)

  const [formInstance] = Form.useForm()

  const toggleCreateMode = () => setCreateMode(!createMode)

  const submitModal = async () => {
    const { title } = await formInstance.validateFields()

    if (title) await creteList(title)
    toggleCreateMode()
    formInstance.resetFields()
  }

  const onCancelModal = () => {
    toggleCreateMode()
    formInstance.resetFields()
  }

  return (
    <div className='list-creator'>
      <div className='list-creator__trigger' onClick={toggleCreateMode}>
        <PlusIcon className='list-creator__trigger-icon' />
        <span className='list-creator__trigger-text'>Создать список</span>
      </div>

      <Modal
        className='list-creator__modal'
        title='Создать список'
        cancelText='Отменить'
        okText={featching ? 'Добавление списка' : 'Добавить список'}
        okButtonProps={{ loading: featching }}
        visible={createMode}
        onOk={submitModal}
        onCancel={onCancelModal}
      >
        <Form
          layout='vertical'
          className='list-creator__form'
          form={formInstance}
        >
          <Form.Item
            name='title'
            label='Название списка'
            rules={[max(30, 'Максимальная длина списка 30 символов')]}
          >
            {createMode && (
              <Input
                autoFocus
                className='list-creator__input'
                placeholder='Введите название списка'
                onPressEnter={submitModal}
              />
            )}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default ListCreator
