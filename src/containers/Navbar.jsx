import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { getLists } from 'redux/reducers/lists'
import { logout } from 'redux/reducers/auth'
import { Navbar } from 'components'

const NavbarContainer = ({ lists, user, getLists, logout }) => {
  const [currentItem, setCurrentItem] = useState(null)

  const history = useHistory()
  const params = useParams()

  useEffect(() => {
    setCurrentItem(params.id)
  }, [params])

  const menuClickHandler = e => {
    history.push(e.key)
    setCurrentItem(e.key)
  }

  useEffect(() => {
    getLists()
  }, [getLists])

  return (
    <Navbar
      lists={lists}
      user={user}
      menuClickHandler={menuClickHandler}
      currentItem={currentItem}
      logout={logout}
    />
  )
}

const mapStateToProps = state => ({
  lists: state.lists.lists,
  user: state.auth.user
})

export default connect(mapStateToProps, { getLists, logout })(NavbarContainer)
