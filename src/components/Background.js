import React from 'react'
import { useLocation } from 'react-router-dom'
import { useMenuStore } from '../store'
import './Background.css'

const Background = () => {
  const currentStepIndex = useMenuStore((state) => state.currentStepIndex)
  const location = useLocation()

  let classColor = 'bg-white'

  if (location.pathname === '/cfp') {
    classColor = 'bg-primary'
  } else {
    if ([0, 2, 4].includes(currentStepIndex)) {
      classColor = 'bg-light'
    }
    if ([1, 3].includes(currentStepIndex)) {
      classColor = 'bg-dark'
    }
  }

  console.debug('[Background] classColor:', classColor)

  return (
    <div
      className={`Background position-fixed w-100 h-100 ${classColor}`}
      style={{ backgroundColor: 'red' }}
    />
  )
}

export default Background
