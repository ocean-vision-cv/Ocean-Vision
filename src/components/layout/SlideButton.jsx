import React from 'react'

import './SlideButton.css'
const SlideButton = () => {
  function slide(){
    document.getElementById('home-title')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
      <button className='slideButton-button' onClick={slide}>Continuar</button>
  )
}

export default SlideButton;