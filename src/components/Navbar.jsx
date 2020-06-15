import React, { useState } from 'react'
import { Layout, Menu } from 'antd'

import {
  StarOutlinedIcon,
  HomeOutlinedIcon,
  AlignLeftOutlinedIcon
} from 'icons'
import { NavbarUser, ListCreator } from 'components'
import 'styles/components/Navbar.sass'

export const Navbar = ({
  lists,
  menuClickHandler,
  currentItem,
  logout,
  creteList,
  user,
  featching
}) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleColapsed = () => setCollapsed(!collapsed)

  const defaultMenuItems = [
    { title: 'Все задачи', id: 'tasks', icon: <HomeOutlinedIcon /> },
    { title: 'Важные', id: 'important', icon: <StarOutlinedIcon /> }
  ]

  const menuItemCreator = ({ id, icon, title }) => (
    <Menu.Item
      key={id}
      className='navbar__menu-item'
      icon={icon || <AlignLeftOutlinedIcon />}
    >
      <span className='navbar__menu-text'>{title}</span>
    </Menu.Item>
  )

  return (
    <div className='navbar'>
      <Layout.Sider
        collapsed={collapsed}
        onCollapse={toggleColapsed}
        breakpoint='lg'
        collapsedWidth='0'
        width='250'
        className='navbar__sider'
      >
        <NavbarUser className='navbar__user' user={user} logout={logout} />
        <Menu
          selectedKeys={[currentItem]}
          theme='dark'
          mode='inline'
          onClick={menuClickHandler}
          className='navbar__menu'
        >
          {defaultMenuItems.map(item => menuItemCreator(item))}

          <hr className='navbar__menu-separator' />

          {lists && lists.map(list => menuItemCreator(list))}
        </Menu>
        <ListCreator creteList={creteList} featching={featching} />
      </Layout.Sider>
    </div>
  )
}