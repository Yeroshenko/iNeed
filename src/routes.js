import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Auth, Todo } from './pages'

export const useRoutes = isAutenficated => {
  if (isAutenficated) {
    return (
      <Switch>
        <Route path='/:id' component={Todo} exact />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path={['/', '/login', '/register']} component={Auth} exact />
      <Redirect to='/' />
    </Switch>
  )
}
