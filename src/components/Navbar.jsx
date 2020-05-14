import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  StarOutlined,
  HomeOutlined,
  AlignLeftOutlined
} from '@ant-design/icons'

import { NavbarUser } from 'components'
import 'styles/components/Navbar.sass'

const Navbar = ({ lists, menuClickHandler, currentItem, logout, user }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleColapsed = () => setCollapsed(!collapsed)

  const defaultMenuItems = [
    { title: 'Все задачи', id: 'tasks', icon: <HomeOutlined /> },
    { title: 'Важные', id: 'important', icon: <StarOutlined /> }
  ]

  const menuItemCreator = ({ id, icon, title }) => (
    <Menu.Item
      key={id}
      className='navbar__menu-item'
      icon={icon || <AlignLeftOutlined />}
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
      </Layout.Sider>
    </div>
  )
}

export default Navbar
