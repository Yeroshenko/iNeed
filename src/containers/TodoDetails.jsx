import React from 'react'
import { TodoDetails } from 'components'
import { connect } from 'react-redux'

const TodoDetailsContainer = ({ open, item }) => {
  return <TodoDetails open={open} item={item} />
}

const mapStateToProps = state => ({
  open: state.details.open,
  item: state.details.item
})

export default connect(mapStateToProps)(TodoDetailsContainer)
