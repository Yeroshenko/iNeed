import React from 'react'
import { Route } from 'react-router-dom'
import { Typography } from 'antd'

import { ShadowBlock, LoginForm, RegisterForm } from 'components'
import 'styles/pages/Auth.sass'

const { Title } = Typography

const Auth = () => {
  return (
    <section className='auth-page'>
      <ShadowBlock className='auth-page__inner'>
        <Title level={2} className='auth-page__title'>
          ToDo mania
        </Title>

        <p className='auth-page__subtitle'>Умный тайм-менеджмент</p>

        <Route exact path={['/', '/login']} component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
      </ShadowBlock>
    </section>
  )
}

export default Auth
