import React from 'react'
import cn from 'classnames'
import { Form, Input, Button } from 'antd'

import { PlusIcon } from 'icons'
import 'styles/components/TodoCreator.sass'

const TodoCreator = ({ featching, createMode, onSubmit, toggleCreateMode }) => (
  <div className={cn('todo-creator', { 'todo-creator--created': createMode })}>
    {!createMode && (
      <div className='todo-creator__trigger' onClick={toggleCreateMode}>
        <PlusIcon />
        <span className='todo-creator__trigger-text'>Новая задача</span>
      </div>
    )}

    {createMode && (
      <Form
        name='basic'
        size='large'
        className='todo-creator__form'
        onFinish={onSubmit}
      >
        <Form.Item name='title' className='todo-creator__input'>
          <Input autoFocus placeholder='Текст задачи' />
        </Form.Item>

        <div className='todo-creator__buttons'>
          <Button
            className='todo-creator__button'
            type='primary'
            loading={featching}
            htmlType='submit'
          >
            Добавить задачу
          </Button>
          <Button
            className='todo-creator__button'
            onClick={toggleCreateMode}
            htmlType='reset'
          >
            Отменить
          </Button>
        </div>
      </Form>
    )}
  </div>
)

export default TodoCreator
