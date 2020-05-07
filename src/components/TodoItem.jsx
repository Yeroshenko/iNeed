import React, { useRef } from 'react'
import { Checkbox } from 'antd'

import { CloseIcon, EditIcon } from 'icons'
import clickSound from 'assets/sounds/click.mp3'
import 'styles/components/TodoItem.sass'

const TodoItem = ({
  todo: { id, title, completed },
  deleteItem,
  updateItem
}) => {
  const audio = useRef(null)

  const changeHandler = (id, completed) => {
    updateItem(id, { completed: !completed })
    audio.current.volume = '0.5'
    audio.current.play()
  }
  return (
    <li className='todo-item'>
      <audio ref={audio} src={clickSound} preload='auto' />
      <Checkbox
        className='todo-item__checkbox'
        onChange={changeHandler.bind(this, id, completed)}
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
}

export default TodoItem
