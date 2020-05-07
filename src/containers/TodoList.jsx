import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { getTodos } from 'redux/reducers/todos'
import { TodoList } from 'components'
import { useParams } from 'react-router-dom'

const TodoListContainer = ({ todos, lists, detailsIsOpen, getTodos }) => {
  const [currentTodos, setCurrentTodos] = useState([])
  const [currentList, setCurrentList] = useState({})

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

  return <TodoList todos={currentTodos} list={currentList} detailsIsOpen={detailsIsOpen} />
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  lists: state.lists.lists,
  detailsIsOpen: state.details.open
})

export default connect(mapStateToProps, { getTodos })(TodoListContainer)
