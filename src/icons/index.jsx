import React from 'react'
import Icon from '@ant-design/icons'

import { ReactComponent as PlusSvg } from 'icons/svg/plus.svg'
import { ReactComponent as CloseSvg } from 'icons/svg/close.svg'
import { ReactComponent as EditSvg } from 'icons/svg/edit.svg'

// custom icons
export const PlusIcon = props => <Icon component={PlusSvg} {...props} />
export const CloseIcon = props => <Icon component={CloseSvg} {...props} />
export const EditIcon = props => <Icon component={EditSvg} {...props} />
