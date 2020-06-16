import React from 'react'
import { connect } from 'react-redux'

import {
  login,
  clearError,
  githubLogin,
  facebookLogin,
  googleLogin
} from 'redux/reducers'
import { LoginForm } from 'components'

const LoginFormContainer = ({
  className,
  isLoading,
  hasError,
  login,
  clearError
}) => {
  const submitHandler = ({ email, password }) => {
    login(email, password)
  }

  return (
    <LoginForm
      className={className}
      isLoading={isLoading}
      onSubmit={submitHandler}
      hasError={hasError}
      clearError={clearError}
      githubLogin={githubLogin}
      facebookLogin={facebookLogin}
      googleLogin={googleLogin}
    />
  )
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  hasError: state.auth.hasError
})

export default connect(mapStateToProps, {
  login,
  clearError,
  githubLogin,
  facebookLogin,
  googleLogin
})(LoginFormContainer)
