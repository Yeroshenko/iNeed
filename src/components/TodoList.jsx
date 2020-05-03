import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { todosApi } from 'api/api'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const currentListId = useParams().listId

  useEffect(() => {
    todosApi.getOne(currentListId).then(setTodos)
  }, [currentListId])

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default TodoList
