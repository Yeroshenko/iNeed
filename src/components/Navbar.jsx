import React, { useState } from 'react'
import { Layout, Menu, Button, Modal } from 'antd'
import {
  StarOutlined,
  HomeOutlined,
  AlignLeftOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'

import 'styles/components/Navbar.sass'

const Navbar = ({ lists, menuClickHandler, defaultSelectedItem, logout }) => {
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

  const showModal = () => {
    Modal.confirm({
      title: 'Вы действительно хотите выйти?',
      icon: <ExclamationCircleOutlined />,
      className: 'navbar__confirm',
      okText: 'Да',
      cancelText: 'Отменить',
      onOk() {
        logout()
      }
    })
  }

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
        <Menu
          defaultSelectedKeys={defaultSelectedItem}
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
      <Button type='primary' onClick={showModal}>Logout</Button>
    </div>
  )
}

export default Navbar
