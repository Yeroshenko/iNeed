import React from 'react'
import { Navbar, TodoList } from 'containers'
import { Switch, Route } from 'react-router-dom'

import 'styles/pages/Todo.sass'

const Auth = () => {
  return (
    <div className='todo'>
      <Navbar />
      <Switch>
        <Route path='/:listId' component={TodoList} />
      </Switch>
    </div>
  )
}

export default Auth
