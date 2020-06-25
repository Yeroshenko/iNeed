import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Auth, Todo } from './pages'
import { Spinner } from 'components'

export const useRoutes = user => {
  if (user) {
    return (
      <Switch>
        <Route path={['/:id', '/tasks', '/important']} component={Todo} exact />
        <Redirect to='/tasks' />
      </Switch>
    )
  }

  if (!user) {
    return <Spinner fullpage={true} />
  }

  return (
    <Switch>
      <Route path={['/', '/login', '/register']} component={Auth} exact />
      <Redirect to='/' />
    </Switch>
  )
}
