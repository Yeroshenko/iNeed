import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

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

  const deleteList = (listId) => {
    deleteListItem(listId)
    history.push('/tasks')
  }

  useEffect(() => {
    getTodos()
  }, [getTodos])

  useEffect(() => {
    setCurrentTodos(currentTodosCreator(todos, listId))
    setCurrentList(currentListCreator(lists, listId))
  }, [todos, lists, listId])

  return (
    <TodoList
      todos={currentTodos}
      list={currentList}
      deleteList={deleteList}
    />
  )
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  lists: state.lists.lists
})

export default connect(mapStateToProps, { getTodos, deleteListItem })(
  TodoListContainer
)
