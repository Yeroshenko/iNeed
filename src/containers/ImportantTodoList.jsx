import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { getTodos } from 'redux/reducers'
import { TodoList } from 'components'

const ImportantTodoListContainer = ({ todos, getTodos }) => {
  const [currentTodos, setCurrentTodos] = useState([])

  const list = { title: 'Важные задачи' }

  const emptyText = 'Отметьте задачу как важную и тогда она здесь появиться'

  const currentTodosCreator = todos =>
    todos.filter(item => item.important === true)

  useEffect(() => {
    getTodos()
  }, [getTodos])

  useEffect(() => {
    setCurrentTodos(currentTodosCreator(todos))
  }, [todos])

  return (
    <TodoList
      canCreate={false}
      todos={currentTodos}
      list={list}
      emptyText={emptyText}
    />
  )
}

const mapStateToProps = state => ({
  todos: state.todos.todos
})

export default connect(mapStateToProps, { getTodos })(
  ImportantTodoListContainer
)
