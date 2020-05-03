import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import { listsApi } from 'api/api'
import { Navbar, TodoList } from 'components'
import 'styles/components/App.sass'

const App = () => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    listsApi.getAll().then(setLists)
  }, [])

  return (
    <div className='app'>
      <Navbar lists={lists} />
      <Switch>
        <Route path='/:listId' component={TodoList} />
      </Switch>
    </div>
  )
}

export default App
