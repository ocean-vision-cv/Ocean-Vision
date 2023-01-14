import React from 'react'

import './SlideButton.css'
const SlideButton = () => {
  function slide(){
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
      <button className='slideButton-button' onClick={slide}>Continuar</button>
  )
}

export default SlideButton;