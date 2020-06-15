import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Typography, notification } from 'antd'

import { LoginForm, RegisterForm } from 'containers'
import { ShadowBlock } from 'components'
import 'styles/pages/Auth.sass'

export const Auth = () => {
  useEffect(() => {
    notification.info({
      message: 'Тестовый акаунт',
      description: 'Email: test@mail.com. Password: 1password ',
      duration: 0,
      placement: 'bottomRight'
    })
  }, [])

  return (
    <section className='auth-page'>
      <ShadowBlock className='auth-page__inner'>
        <Typography.Title level={2} className='auth-page__title'>
          ToDo mania
        </Typography.Title>

        <p className='auth-page__subtitle'>Умный тайм-менеджмент</p>

        <Route exact path={['/', '/login']} component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
      </ShadowBlock>
    </section>
  )
}
