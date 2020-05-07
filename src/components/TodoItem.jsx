import React, { useRef } from 'react'
import { Checkbox } from 'antd'

import { CloseIcon } from 'icons'
import checkSound from 'assets/sounds/check.mp3'
import uncheckSound from 'assets/sounds/uncheck.mp3'
import 'styles/components/TodoItem.sass'

const TodoItem = ({
  todo: { id, title, completed },
  deleteItem,
  updateItem,
  showDetails
}) => {
  const checkAudio = useRef(null)
  const uncheckAudio = useRef(null)

  const changeHandler = (id, completed) => {
    updateItem(id, { completed: !completed })
    uncheckAudio.current.volume = '0.5'
    if (completed) {
      uncheckAudio.current.play()
    } else {
      checkAudio.current.play()
    }
  }

  return (
    <li className='todo-item'>
      <audio ref={checkAudio} src={checkSound} preload='auto' />
      <audio ref={uncheckAudio} src={uncheckSound} preload='auto' />
      <Checkbox
        className='todo-item__checkbox'
        onChange={changeHandler.bind(this, id, completed)}
        checked={completed}
      />
      <span className='todo-item__text' onClick={showDetails.bind(this, id)}>
        {title}
      </span>
      <div className='todo-item__icons'>
        {/* <EditIcon className='todo-item__icon' /> */}
        <CloseIcon
          className='todo-item__icon'
          onClick={deleteItem.bind(this, id)}
        />
      </div>
    </li>
  )
}

export default TodoItem
