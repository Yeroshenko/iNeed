import React from 'react'
import cn from 'classnames'
import { Spin } from 'antd'

import 'styles/components/Spinner.sass'

const Spinner = ({ className, fullpage }) => (
  <div className={cn('spinner', className, { 'spinner--full': fullpage })}>
    <Spin size='large' tip='Загрузка...' />
  </div>
)

export default Spinner
