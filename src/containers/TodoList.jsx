import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { Modal, Form } from 'antd'

import { getTodos } from 'redux/reducers/todos'
import { deleteListItem, updateListTitle } from 'redux/reducers/lists'
import { ExclamationCircleOutlinedIcon } from 'icons'
import { TodoList } from 'components'

const TodoListContainer = ({
  todos,
  lists,
  featching,
  getTodos,
  deleteListItem,
  updateListTitle
}) => {
  const [currentTodos, setCurrentTodos] = useState([])
  const [currentList, setCurrentList] = useState({})
  const [editMode, setEditMode] = useState(false)

  const history = useHistory()
  const listId = useParams().listId
  const [formInstance] = Form.useForm()

  const toggleEditMode = () => setEditMode(!editMode)

  const currentTodosCreator = (todos, listId) =>
    todos.filter(item => item.listId === listId)

  const currentListCreator = (lists, listId) =>
    lists.find(item => item.id === listId)

  useEffect(() => {
    getTodos()
  }, [getTodos])

  useEffect(() => {
    setCurrentTodos(currentTodosCreator(todos, listId))
    setCurrentList(currentListCreator(lists, listId))
  }, [todos, lists, listId])

  const deleteList = () => {
    Modal.confirm({
      title: 'Вы действительно хотите удалить список?',
      icon: <ExclamationCircleOutlinedIcon />,
      okText: 'Да',
      cancelText: 'Отменить',
      onOk() {
        deleteListItem(listId)
        history.push('/tasks')
      }
    })
  }

  const submitModal = async () => {
    const values = await formInstance.validateFields()

    if (values.title) {
      updateListTitle(currentList.id, values.title)
    } else {
      formInstance.setFieldsValue({ title: currentList.title })
    }

    toggleEditMode()
  }

  const cancelModal = () => {
    toggleEditMode()
    formInstance.setFieldsValue({ title: currentList.title })
  }

  return (
    <TodoList
      todos={currentTodos}
      list={currentList}
      formInstance={formInstance}
      featching={featching}
      editMode={editMode}
      submitModal={submitModal}
      cancelModal={cancelModal}
      deleteList={deleteList}
      toggleEditMode={toggleEditMode}
    />
  )
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  lists: state.lists.lists,
  featching: state.lists.featching
})

export default connect(mapStateToProps, {
  getTodos,
  deleteListItem,
  updateListTitle
})(TodoListContainer)
