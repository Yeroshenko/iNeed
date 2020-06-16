import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Auth, Todo } from './pages'
import { Spinner } from 'components'

export const useRoutes = user => {
  if (user) {
    return (
      <Switch>
        <Route path='/:id' component={Todo} exact />
        <Route to='/tasks' component={Todo} exact />
        <Route to='/important' component={Todo} exact />
        <Redirect to='/tasks' />
      </Switch>
    )
  }

  if (user === null) {
    return <Spinner fullpage={true} />
  }

  return (
    <Switch>
      <Route path={['/', '/login', '/register']} component={Auth} exact />
      <Redirect to='/' />
    </Switch>
  )
}
