import React from 'react'

import { Checkbox } from 'components'
import { CloseIcon } from 'icons'
import 'styles/components/TodoItem.sass'

const TodoItem = ({
  todo: { id, title, completed },
  deleteItem,
  updateItem,
}) => {
  const changeHandler = (id, completed) => {
    updateItem(id, { completed: !completed })
  }

  return (
    <li className='todo-item'>
      <Checkbox
        className='todo-item__checkbox'
        onChange={changeHandler.bind(this, id, completed)}
        checked={completed}
      />
      <span className='todo-item__text' >
        {title}
      </span>
      <div className='todo-item__icons'>
        <CloseIcon
          className='todo-item__icon'
          onClick={deleteItem.bind(this, id)}
        />
      </div>
    </li>
  )
}

export default TodoItem
