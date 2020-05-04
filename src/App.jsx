import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Navbar, TodoList } from 'containers'
import 'styles/components/App.sass'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Switch>
        <Route path='/:listId' component={TodoList} />
      </Switch>
    </div>
  )
}

export default App
