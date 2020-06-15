import React, { useRef } from 'react'
import cn from 'classnames'
import { Form, Input, Button } from 'antd'

import { max } from 'utils'
import { PlusIcon } from 'icons'
import 'styles/components/TodoCreator.sass'

export const TodoCreator = ({ featching, createMode, onSubmit, toggleCreateMode }) => {
  const todoCreatorRef = useRef()

  return (
    <div
      className={cn('todo-creator', { 'todo-creator--created': createMode })}
      ref={todoCreatorRef}
    >
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
          <Form.Item
            name='title'
            className='todo-creator__input'
            rules={[max(512, 'Максимальная длина задачи 512 символов')]}
          >
            <Input autoFocus placeholder='Текст задачи' />
          </Form.Item>

          <div className='todo-creator__buttons'>
            <Button
              className='todo-creator__button'
              type='primary'
              loading={featching}
              htmlType='submit'
            >
              {featching ? 'Добавление задачи' : 'Добавить задачу'}
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
}
