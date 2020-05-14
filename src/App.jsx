import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { checkAuth } from 'redux/reducers/auth'
import { useRoutes } from 'routes'

const App = ({ checkAuth, user }) => {
  const routes = useRoutes(user)

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return <div className='app'>{routes}</div>
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

export default connect(mapStateToProps, { checkAuth })(App)
