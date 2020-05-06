import React, { useState } from 'react'
import { connect } from 'react-redux'

import { createTodoItem } from 'redux/reducers/todos'
import { TodoCreator } from 'components'

const TodoCreatorContainer = ({ listId, featching, createTodoItem }) => {
  const [createMode, setCreateMode] = useState(false)

  const toggleCreateMode = () => setCreateMode(!createMode)
  
  const onSubmit = async ({ title }) => {
    if (title) {
      await createTodoItem({ title, listId })
    }
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

export default connect(mapStateToProps, { createTodoItem })(TodoCreatorContainer)
