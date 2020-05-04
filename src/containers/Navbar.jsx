import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getLists } from 'redux/reducers/lists'
import { Navbar } from 'components'
import { useHistory } from 'react-router-dom'

const NavbarContainer = ({ lists, getLists }) => {
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
    />
  )
}

const mapStateToProps = state => ({
  lists: state.lists.lists
})

export default connect(mapStateToProps, { getLists })(NavbarContainer)
