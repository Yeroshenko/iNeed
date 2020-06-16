import React from 'react'
import Icon, {
  StarOutlined,
  StarFilled,
  UserOutlined,
  MailOutlined,
  LockOutlined,
  HomeOutlined,
  AlignLeftOutlined,
  SettingOutlined,
  LogoutOutlined,
  ExclamationCircleOutlined,
  DeleteOutlined,
  EditOutlined
} from '@ant-design/icons'

import { ReactComponent as PlusSvg } from 'assets/icons/plus.svg'
import { ReactComponent as CloseSvg } from 'assets/icons/close.svg'
import { ReactComponent as EditSvg } from 'assets/icons/edit.svg'
import { ReactComponent as MoreSvg } from 'assets/icons/more.svg'
import { ReactComponent as FacebookSvg } from 'assets/icons/facebook-logo.svg'
import { ReactComponent as GithubSvg } from 'assets/icons/github-logo.svg'
import { ReactComponent as GoogleSvg } from 'assets/icons/google-logo.svg'

// custom icons
export const PlusIcon = props => <Icon component={PlusSvg} {...props} />
export const CloseIcon = props => <Icon component={CloseSvg} {...props} />
export const EditIcon = props => <Icon component={EditSvg} {...props} />
export const MoreIcon = props => <Icon component={MoreSvg} {...props} />
export const GithubIcon = props => <Icon component={GithubSvg} {...props} />
export const GoogleIcon = props => <Icon component={GoogleSvg} {...props} />
export const FacebookIcon = props => <Icon component={FacebookSvg} {...props} />

export const StarOutlinedIcon = props => <StarOutlined {...props} />
export const StarFilledIcon = props => <StarFilled {...props} />
export const UserOutlinedIcon = props => <UserOutlined {...props} />
export const MailOutlinedIcon = props => <MailOutlined {...props} />
export const LockOutlinedIcon = props => <LockOutlined {...props} />
export const HomeOutlinedIcon = props => <HomeOutlined {...props} />
export const AlignLeftOutlinedIcon = props => <AlignLeftOutlined {...props} />
export const SettingOutlinedIcon = props => <SettingOutlined {...props} />
export const LogoutOutlinedIcon = props => <LogoutOutlined {...props} />
export const EditOutlinedIcon = props => <EditOutlined {...props} />
export const DeleteOutlinedIcon = props => <DeleteOutlined {...props} />
export const ExclamationCircleOutlinedIcon = props => (
  <ExclamationCircleOutlined {...props} />
)
