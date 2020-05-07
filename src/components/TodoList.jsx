import React from 'react'
import cn from 'classnames'

import { TodoCreator, TodoItem } from 'containers'
import { randomColor } from 'utils/randomColor'
import 'styles/components/TodoList.sass'

const TodoList = ({ todos, list, detailsIsOpen }) => (
  <div className={cn('todo-list', { 'todo-list--show_details': detailsIsOpen })}>
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
