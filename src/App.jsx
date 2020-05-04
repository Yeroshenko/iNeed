import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Navbar } from 'containers'
import { TodoList } from 'components'
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
