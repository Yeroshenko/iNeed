import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  StarFilled,
  HomeFilled,
  CalendarFilled,
  PlusCircleFilled
} from '@ant-design/icons'

import 'styles/components/Navbar.sass'
import { useHistory } from 'react-router-dom'

const Navbar = ({ lists }) => {
  const [collapsed, setCollapsed] = useState(false)
  const history = useHistory()

  const toggleColapsed = () => setCollapsed(!collapsed)

  const menuItems = [
    { title: 'Задачи', id: 'tasks', icon: <HomeFilled /> },
    { title: 'Важные', id: 'important', icon: <StarFilled /> },
    { title: 'Запланированные', id: 'planned', icon: <CalendarFilled /> }
  ]

  const clickHandler = e => {
    history.push(e.key)
  }

  const menuItemCreator = ({ id, icon, title }) => (
    <Menu.Item
      key={id}
      className='navbar__menu-item'
      icon={icon || <PlusCircleFilled />}
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
          theme='dark'
          defaultSelectedKeys={['tsks']}
          mode='inline'
          onClick={clickHandler}
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
