import React from 'react'
import cn from 'classnames'

import 'styles/components/TodoDetails.sass'

const TodoDetails = ({ open, item }) => {
  return (
    <div className={cn('todo-details', { 'todo-details--open': open })}>
      {item && <div>{item.title}</div>}
    </div>
  )
}

export default TodoDetails
