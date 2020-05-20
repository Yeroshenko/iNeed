import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form } from 'antd'

import { deleteTodoItem, updateTodoItem } from 'redux/reducers/todos'
import { TodoItem } from 'components'

const TodoItemContainer = ({ todo, deleteTodoItem, updateTodoItem }) => {
  const [editMode, setEditMode] = useState(false)
  const [formInstance] = Form.useForm()

  const initialValues = { title: todo.title }

  const toggleEditMode = () => setEditMode(!editMode)

  const checkHandler = (id, completed) => {
    updateTodoItem(id, { completed: !completed })
  }

  const submitModal = async () => {
    const values = await formInstance.validateFields()

    if (values.title) {
     updateTodoItem(todo.id, values)
    } else {
      formInstance.setFieldsValue(initialValues)
    }

    toggleEditMode()
  }

  const onCancelModal = () => {
    toggleEditMode()
    formInstance.setFieldsValue(initialValues)
  }

  return (
    <TodoItem
      todo={todo}
      deleteItem={deleteTodoItem}
      updateItem={updateTodoItem}
      editMode={editMode}
      toggleEditMode={toggleEditMode}
      initialValues={initialValues}
      formInstance={formInstance}
      checkHandler={checkHandler}
      onCancelModal={onCancelModal}
      submitModal={submitModal}
    />
  )
}

export default connect(null, {
  deleteTodoItem,
  updateTodoItem
})(TodoItemContainer)
