import React from 'react'
import cn from 'classnames'

import { TodoDetailsTitle } from 'components'
import 'styles/components/TodoDetails.sass'

const TodoDetails = ({ open, item }) => {
  return (
    <div className={cn('todo-details', { 'todo-details--open': open })}>
      {item && (
        <div className='todo-details__inner'>
          <TodoDetailsTitle title={item.title} />
        </div>
      )}
    </div>
  )
}

export default TodoDetails
