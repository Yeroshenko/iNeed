import React, { useState } from 'react'

import { PlusIcon } from 'icons'
import 'styles/components/ListCreator.sass'

const ListCreator = () => {
  const [createMode, setCreateMode] = useState(false)

  const toggleCreateMode = () => setCreateMode(!createMode)

  return (
    <div className='list-creator'>
      <div className='list-creator__trigger' onClick={toggleCreateMode}>
        <PlusIcon className='list-creator__trigger-icon' />
        <span className='list-creator__trigger-text'>Создать список</span>
      </div>
      {createMode && <div className='list-creator__modal'>i am modal</div>}
    </div>
  )
}

export default ListCreator
