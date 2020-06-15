import React from 'react'
import cn from 'classnames'

import 'styles/components/ShadowBlock.sass'

export const ShadowBlock = ({ children, className }) => (
  <div className={cn('shadow-block', className)}>{children}</div>
)