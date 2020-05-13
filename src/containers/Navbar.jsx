import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getLists } from 'redux/reducers/lists'
import { logout } from 'redux/reducers/auth'
import { Navbar } from 'components'
import { useHistory } from 'react-router-dom'

const NavbarContainer = ({ lists, getLists, logout }) => {
  const history = useHistory()

  const defaultSelectedItem = []

  const menuClickHandler = e => history.push(e.key)

  useEffect(() => {
    getLists()
  }, [getLists])

  return (
    <Navbar
      lists={lists}
      menuClickHandler={menuClickHandler}
      defaultSelectedItem={defaultSelectedItem}
      logout={logout}
    />
  )
}

const mapStateToProps = state => ({
  lists: state.lists.lists
})

export default connect(mapStateToProps, { getLists, logout })(NavbarContainer)
