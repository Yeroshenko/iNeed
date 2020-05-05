import React, { useState } from 'react'
import { Checkbox } from 'antd'

import { CloseIcon, EditIcon } from 'icons'
import 'styles/components/TodoItem.sass'

const TodoItem = ({ todo }) => {
  const [checked, setChecked] = useState(todo.completed)
  const onChange = e => {
    setChecked(e.target.checked)
  }

  return (
    <li className='todo-item'>
      <Checkbox
        className='todo-item__checkbox'
        onChange={onChange}
        checked={checked}
      >
        <span className='todo-item__text'>{todo.title}</span>
      </Checkbox>
      <div className='todo-item__icons'>
        <EditIcon className='todo-item__icon' />
        <CloseIcon className='todo-item__icon' />
      </div>
    </li>
  )
}

export default TodoItem
