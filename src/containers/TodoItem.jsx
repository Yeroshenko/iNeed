import React from 'react'
import { connect } from 'react-redux'

import { deleteTodoItem, updateTodoItem } from 'redux/reducers/todos'
import { TodoItem } from 'components'

const TodoItemContainer = ({ todo, deleteTodoItem, updateTodoItem }) => {
  return (
    <TodoItem
      todo={todo}
      deleteItem={deleteTodoItem}
      updateItem={updateTodoItem}
    />
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {
  deleteTodoItem,
  updateTodoItem
})(TodoItemContainer)
