import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  StarOutlined,
  HomeOutlined,
  CalendarOutlined,
  PlusCircleOutlined
} from '@ant-design/icons'

import 'styles/components/Navbar.sass'

const Navbar = ({ lists }) => {
  const [collapsed, setCollapsed] = useState(false)
  const history = useHistory()

  const toggleColapsed = () => setCollapsed(!collapsed)

  const menuItems = [
    { title: 'Задачи', id: 'tasks', icon: <HomeOutlined /> },
    { title: 'Важные', id: 'important', icon: <StarOutlined /> },
    { title: 'Запланированные', id: 'planned', icon: <CalendarOutlined /> }
  ]

  const clickHandler = e => {
    history.push(e.key)
  }

  const menuItemCreator = ({ id, icon, title }) => (
    <Menu.Item
      key={id}
      className='navbar__menu-item'
      icon={icon || <PlusCircleOutlined />}
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
          defaultSelectedKeys={['tasks']}
          theme='dark'
          mode='inline'
          onClick={clickHandler}
          className='navbar__menu'
        >
          {menuItems.map(item => menuItemCreator(item))}

          <hr className='navbar__menu-separator' />

          {lists && lists.map(list => menuItemCreator(list))}
        </Menu>
      </Layout.Sider>
    </div>
  )
}

export default Navbar
