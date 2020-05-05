import React from 'react'

import { TodoCreator } from 'containers'
import { TodoItem } from 'components'
import { randomColor } from 'utils/randomColor'
import 'styles/components/TodoList.sass'

const TodoList = ({ todos, list }) => (
  <div className='todo-list'>
    {list && (
      <>
        <h2 className='todo-list__title' style={{ color: randomColor() }}>
          {list.title}
        </h2>
        <ul className='todo-list__items'>
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
        <div className='todo-list__todo-creator'>
          <TodoCreator listId={list.id} />
        </div>
      </>
    )}
  </div>
)

export default TodoList
