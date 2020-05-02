import React, { useEffect, useState } from 'react'

import { get } from 'api'
import { Navbar } from 'components'
import 'styles/components/App.sass'

const App = () => {
  const [lists, setLists] = useState([])
  const [todos, setTodos] = useState([])

  useEffect(() => {
    get('lists').then(setLists)
    get('todos').then(setTodos)
  }, [])

  return (
    <div className='app'>
      <Navbar lists={lists} />

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
