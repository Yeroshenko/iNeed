import React, { useState } from 'react'
import { Input } from 'antd'

import 'styles/components/TodoDetailsTitle.sass'

const TodoDetailsTitle = ({ title, submitHandler }) => {
  const [editMode, setEditMode] = useState(false)

  const toggleEgitMode = () => setEditMode(!editMode)

  const onSubmit = (e) => console.log(e.target.value)

  return (
    <div className='todo-details__title'>
      {!editMode && <h3 onClick={toggleEgitMode}>{title}</h3>}

      {editMode && (
        <Input.TextArea
          autoFocus
          placeholder='Введите новое название задачи'
          defaultValue={title}
          onBlur={toggleEgitMode}
          onPressEnter={onSubmit}
          autoSize={{ minRows: 1, maxRows: 8 }}
        />
      )}
    </div>
  )
}

export default TodoDetailsTitle
