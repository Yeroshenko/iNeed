import React from 'react'
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'
import { Dropdown, Menu, Modal } from 'antd'

import { randomColor } from 'utils/randomColor'
import { MoreIcon } from 'icons'
import { TodoCreator, TodoItem } from 'containers'
import 'styles/components/TodoList.sass'

const TodoList = ({ todos, list, deleteList }) => {

  const removeListModal = () => {
    Modal.confirm({
      title: 'Вы действительно хотите удалить список?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Да',
      cancelText: 'Отменить',
      onOk() {
        deleteList(list.id)
      }
    })
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <EditOutlined />
        <span>Редактировать список</span>
      </Menu.Item>
      <Menu.Item onClick={removeListModal}>
        <DeleteOutlined />
        <span>Удалить список</span>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className='todo-list'>
      {list && (
        <>
          <div className='todo-list__header'>
            <h2 className='todo-list__title' style={{ color: randomColor() }}>
              {list.title}
            </h2>
            <Dropdown overlay={menu}>
              <span className='todo-list__dropdown-icon'>
                <MoreIcon />
              </span>
            </Dropdown>
          </div>
          <ul className='todo-list__items'>
            {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
          <div className='todo-list__todo-creator'>
            <TodoCreator listId={list.id} />
          </div>
        </>
      )}
    </div>
  )
}

export default TodoList
