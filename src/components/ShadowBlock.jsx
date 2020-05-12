import React from 'react'
import cn from 'classnames'

import 'styles/components/ShadowBlock.sass'

const ShadowBlock = ({ children, className }) => (
  <div className={cn('shadow-block', className)}>{children}</div>
)

export default ShadowBlock
