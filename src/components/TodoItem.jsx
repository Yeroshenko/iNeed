import React from 'react'
import { Modal, Form, Input, Tooltip } from 'antd'

import { max } from 'utils'
import { CloseIcon, EditIcon, StarOutlinedIcon, StarFilledIcon } from 'icons'
import { Checkbox } from 'components'
import 'styles/components/TodoItem.sass'

const TodoItem = ({
  todo: { id, title, completed, important },
  deleteItem,
  editMode,
  toggleEditMode,
  toggleImportant,
  initialValues,
  formInstance,
  checkHandler,
  onCancelModal,
  submitModal
}) => (
  <li className='todo-item'>
    <Modal
      className='todo-item__editor'
      title='Редактирование задачи'
      okText='Сохранить изменения'
      cancelText='Отменить'
      visible={editMode}
      onOk={submitModal}
      onCancel={onCancelModal}
    >
      {editMode && (
        <Form
          layout='vertical'
          className='todo-item__editor-form'
          initialValues={initialValues}
          form={formInstance}
        >
          <Form.Item
            name='title'
            label='Название задачи'
            rules={[max(512, 'Максимальная длина задачи 512 символов')]}
          >
            <Input.TextArea
              autoFocus
              className='todo-item__editor-input'
              placeholder='Введите название задачи'
              onPressEnter={submitModal}
              autoSize={{ minRows: 1, maxRows: 10 }}
            />
          </Form.Item>
        </Form>
      )}
    </Modal>
    <Checkbox
      className='todo-item__checkbox'
      onChange={checkHandler.bind(this, id, completed)}
      checked={completed}
    >
      <span className='todo-item__text'>{title}</span>
    </Checkbox>
    <div className='todo-item__icons'>
      <Tooltip title='Добавить в важное'>
        {important ? (
          <StarFilledIcon
            className='todo-item__icon'
            onClick={toggleImportant.bind(this, id, important)}
          />
        ) : (
          <StarOutlinedIcon
            className='todo-item__icon'
            onClick={toggleImportant.bind(this, id, important)}
          />
        )}
      </Tooltip>
      <Tooltip title='Редактировать задачу'>
        <EditIcon className='todo-item__icon' onClick={toggleEditMode} />
      </Tooltip>
      <Tooltip title='Удалить задачу'>
        <CloseIcon
          className='todo-item__icon'
          onClick={deleteItem.bind(this, id)}
        />
      </Tooltip>
    </div>
  </li>
)

export default TodoItem
