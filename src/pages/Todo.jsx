import React from 'react'
import { Navbar, TodoList } from 'containers'
import { Switch, Route } from 'react-router-dom'

import 'styles/pages/Todo.sass'

const Todo = () => {
  return (
    <div className='todo'>
      <Navbar />
      <Switch>
        <Route path='/tasks' component={TodoList} />
        <Route path='/important' component={TodoList} />
        <Route path='/:listId' component={TodoList} />
      </Switch>
    </div>
  )
}

export default Todo
