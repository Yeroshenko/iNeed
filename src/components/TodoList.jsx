import React from 'react'
import { Checkbox } from 'antd'

import { randomColor } from 'utils/randomColor'
import 'styles/components/TodoList.sass'

const TodoList = ({ todos, list }) => {
  const onChange = e => {
    console.log('checked = ', e.target.checked)
  }

  return (
    <div className='todo-list'>
      {list && (
        <h2 className='todo-list__title' style={{ color: randomColor() }}>
          {list.title}
        </h2>
      )}
      <ul className='todo-list__list'>
        {todos.map(todo => (
          <li key={todo.id}>
            <Checkbox onChange={onChange} checked={todo.completed}>
              {todo.title}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
