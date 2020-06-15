import React from 'react'
import { connect } from 'react-redux'

import { register, clearError } from 'redux/reducers'
import { RegisterForm } from 'components'

const RegisterFormContainer = ({ className, isLoading, hasError, register, clearError }) => {
  const submitHandler = ({ email, password }) => {
    register(email, password)
  }

  return (
    <RegisterForm
      className={className}
      isLoading={isLoading}
      hasError={hasError}
      onSubmit={submitHandler}
      clearError={clearError}
    />
  )
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  hasError: state.auth.hasError
})

export default connect(mapStateToProps, { register, clearError })(RegisterFormContainer)
