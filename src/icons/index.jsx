import React from 'react'
import Icon from '@ant-design/icons'

import { ReactComponent as PlusSvg } from 'assets/icons/plus.svg'
import { ReactComponent as CloseSvg } from 'assets/icons/close.svg'
import { ReactComponent as EditSvg } from 'assets/icons/edit.svg'

// custom icons
export const PlusIcon = props => <Icon component={PlusSvg} {...props} />
export const CloseIcon = props => <Icon component={CloseSvg} {...props} />
export const EditIcon = props => <Icon component={EditSvg} {...props} />
