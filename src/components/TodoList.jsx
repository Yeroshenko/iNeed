import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { todosApi } from 'api'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const currentListId = useParams().listId

  useEffect(() => {
    todosApi.getOne(currentListId).then(setTodos)
  }, [currentListId])

  return (
    <div className='todo-list'>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
