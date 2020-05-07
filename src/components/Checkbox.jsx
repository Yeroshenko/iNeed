import React, { useRef } from 'react'
import { Checkbox as BaseCheckbox } from 'antd'

import checkSound from 'assets/sounds/check.mp3'
import uncheckSound from 'assets/sounds/uncheck.mp3'

const Checkbox = ({ onChange, checked, ...props }) => {
  const checkAudio = useRef(null)
  const uncheckAudio = useRef(null)

  const changeHandler = () => {
    onChange()
    uncheckAudio.current.volume = '0.5'
    if (checked) {
      uncheckAudio.current.play()
    } else {
      checkAudio.current.play()
    }
  }

  return (
    <span>
      <audio ref={checkAudio} src={checkSound} preload='auto' />
      <audio ref={uncheckAudio} src={uncheckSound} preload='auto' />
      
      <BaseCheckbox onChange={changeHandler} checked={checked} {...props} />
    </span>
  )
}

export default Checkbox
