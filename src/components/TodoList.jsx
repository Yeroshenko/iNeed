import React from 'react'

import { TodoItem } from 'components'
import { randomColor } from 'utils/randomColor'
import 'styles/components/TodoList.sass'

const TodoList = ({ todos, list }) => {
  return (
    <div className='todo-list'>
      {list && (
        <h2 className='todo-list__title' style={{ color: randomColor() }}>
          {list.title}
        </h2>
      )}
      <ul className='todo-list__items'>
        {todos.map(todo => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
