import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { getLists, creteList, logout } from 'redux/reducers'
import { Navbar } from 'components'

const NavbarContainer = ({ lists, user, featching, getLists, creteList, logout }) => {
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
      creteList={creteList}
      featching={featching}
    />
  )
}

const mapStateToProps = state => ({
  lists: state.lists.lists,
  user: state.auth.user,
  featching: state.lists.featching
})

export default connect(mapStateToProps, { getLists, creteList, logout })(NavbarContainer)
