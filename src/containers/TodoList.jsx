import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Modal } from 'antd'

import { getTodos } from 'redux/reducers/todos'
import { deleteListItem } from 'redux/reducers/lists'
import { TodoList } from 'components'

const TodoListContainer = ({ todos, lists, getTodos, deleteListItem }) => {
  const [currentTodos, setCurrentTodos] = useState([])
  const [currentList, setCurrentList] = useState({})

  const history = useHistory()
  const listId = useParams().listId

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
      icon: <ExclamationCircleOutlined />,
      okText: 'Да',
      cancelText: 'Отменить',
      onOk() {
        deleteListItem(listId)
        history.push('/tasks')
      }
    })
  }

  return (
    <TodoList todos={currentTodos} list={currentList} deleteList={deleteList} />
  )
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  lists: state.lists.lists
})

export default connect(mapStateToProps, { getTodos, deleteListItem })(
  TodoListContainer
)
