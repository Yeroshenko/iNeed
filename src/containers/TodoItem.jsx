import React from 'react'
import { connect } from 'react-redux'

import { deleteTodoItem, updateTodoItem } from 'redux/reducers/todos'
import { setOpen, setItem } from 'redux/reducers/details'
import { TodoItem } from 'components'

const TodoItemContainer = ({
  todo,
  detailsIsOpen,
  deleteTodoItem,
  updateTodoItem,
  setOpenDetails,
  setDetailsItem,
  currentDetailsItem
}) => {
  const showDetails = () => {
    if (!detailsIsOpen) {
      setDetailsItem(todo)
      setOpenDetails(true)
      return
    }
    if (todo === currentDetailsItem) {
      setOpenDetails(false)
    } else {
      setDetailsItem(todo)
    }
  }

  return (
    <TodoItem
      todo={todo}
      deleteItem={deleteTodoItem}
      updateItem={updateTodoItem}
      showDetails={showDetails}
    />
  )
}

const mapStateToProps = state => ({
  detailsIsOpen: state.details.open,
  currentDetailsItem: state.details.item
})

export default connect(mapStateToProps, {
  deleteTodoItem,
  updateTodoItem,
  setOpenDetails: setOpen,
  setDetailsItem: setItem
})(TodoItemContainer)
