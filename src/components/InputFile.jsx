import React from 'react'

import 'styles/components/InputFile.sass'
import { useState } from 'react'

export const InputFile = ({ children, id, accept, setFile, cleareFile }) => {
  const [fileName, setFileName] = useState(null)

  const changeHandler = e => {
    const document = e.target.files[0]

    if (document) {
      cleareFile()
      setFileName(document.name)
      setFile(document)
    } else {
      setFileName(null)
      cleareFile()
    }
  }

  return (
    <div className='input-file'>
      <input type='file' id={id} accept={accept} onChange={changeHandler} />
      <label htmlFor={id} className='ant-btn'>
        {fileName ? fileName : children}
      </label>
    </div>
  )
}