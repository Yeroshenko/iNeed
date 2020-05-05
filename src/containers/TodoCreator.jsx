import React, { useState } from 'react'
import { connect } from 'react-redux'

import { createTodo } from 'redux/reducers/todos'
import { TodoCreator } from 'components'

const TodoCreatorContainer = ({ listId, featching, createTodo }) => {
  const [createMode, setCreateMode] = useState(false)

  const toggleCreateMode = () => setCreateMode(!createMode)
  
  const onSubmit = async ({ title }) => {
    await createTodo({ title, listId })
    toggleCreateMode()
  }

  return (
    <TodoCreator
      listId={listId}
      createMode={createMode}
      featching={featching}
      onSubmit={onSubmit}
      toggleCreateMode={toggleCreateMode}
    />
  )
}

const mapStateToProps = state => ({
  featching: state.todos.featching
})

export default connect(mapStateToProps, { createTodo })(TodoCreatorContainer)
