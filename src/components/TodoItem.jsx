import React from 'react'
import { Checkbox } from 'antd'

import 'styles/components/TodoItem.sass'

const TodoItem = ({ todo }) => {
  const onChange = e => {
    console.log('checked = ', e.target.checked)
  }

  return (
    <li key={todo.id} className='todo-item'>
      <Checkbox
        className='todo-item__checkbox'
        onChange={onChange}
        checked={todo.completed}
      >
        <span className='todo-item__text'>{todo.title}</span>
      </Checkbox>
    </li>
  )
}

export default TodoItem
