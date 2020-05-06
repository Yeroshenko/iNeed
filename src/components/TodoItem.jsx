import React from 'react'
import { Checkbox } from 'antd'

import { CloseIcon, EditIcon } from 'icons'
import 'styles/components/TodoItem.sass'

const TodoItem = ({
  todo: { id, title, completed },
  deleteItem,
  updateItem
}) => (
  <li className='todo-item'>
    <Checkbox
      className='todo-item__checkbox'
      onChange={updateItem.bind(this, id, { completed: !completed })}
      checked={completed}
    >
      <span className='todo-item__text'>{title}</span>
    </Checkbox>
    <div className='todo-item__icons'>
      <EditIcon className='todo-item__icon' />
      <CloseIcon
        className='todo-item__icon'
        onClick={deleteItem.bind(this, id)}
      />
    </div>
  </li>
)

export default TodoItem
