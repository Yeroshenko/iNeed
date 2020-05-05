import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  StarOutlined,
  HomeOutlined,
  CalendarOutlined,
  AlignLeftOutlined
} from '@ant-design/icons'

import 'styles/components/Navbar.sass'

const Navbar = ({ lists, menuClickHandler, defaultSelectedItem }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleColapsed = () => setCollapsed(!collapsed)

  const defaultMenuItems = [
    { title: 'Задачи', id: 'tasks', icon: <HomeOutlined /> },
    { title: 'Важные', id: 'important', icon: <StarOutlined /> },
    { title: 'Запланированные', id: 'planned', icon: <CalendarOutlined /> }
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
        collapsible
        collapsed={collapsed}
        onCollapse={toggleColapsed}
        width='250'
        className='navbar__sider'
      >
        <Menu
          defaultSelectedKeys={defaultSelectedItem}
          theme='dark'
          mode='inline'
          onClick={menuClickHandler}
          className='navbar__menu'
        >
          {/* {defaultMenuItems.map(item => menuItemCreator(item))} */}

          <hr className='navbar__menu-separator' />

          {lists && lists.map(list => menuItemCreator(list))}
        </Menu>
      </Layout.Sider>
    </div>
  )
}

export default Navbar
