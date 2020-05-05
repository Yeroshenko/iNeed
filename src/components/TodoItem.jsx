import React, { useState } from 'react'
import { Checkbox } from 'antd'

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
    </li>
  )
}

export default TodoItem
