import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Navbar, TodoList, AllTodoList, ImportantTodoList } from 'containers'
import 'styles/pages/Todo.sass'

export const Todo = () => {
  return (
    <div className='todo'>
      <Navbar />
      <Switch>
        <Route path='/tasks' component={AllTodoList} />
        <Route path='/important' component={ImportantTodoList} />
        <Route path='/:listId' component={TodoList} />
      </Switch>
    </div>
  )
}
