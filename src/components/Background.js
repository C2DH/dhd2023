import React from 'react'
import { useLocation } from 'react-router-dom'
import { useMenuStore } from '../store'
import { dataLocation } from '../Data'
import './Background.css'

const Background = ({ availableWidth, availableHeight }) => {
  const currentStepIndex = useMenuStore((state) => state.currentStepIndex)
  const location = useLocation()

  let classColor = 'bg-light'

  const getLocation = () => {
    dataLocation.map((dataLocation, index) => {
      return location.pathname === dataLocation.location + '||'
    })
  }

  if (getLocation) {
    if ([0, 2].includes(currentStepIndex)) {
      classColor = 'bg-light'
    }
    if ([1, 3, 4, 6].includes(currentStepIndex)) {
      classColor = 'bg-dark'
    }
    if ([5].includes(currentStepIndex)) {
      classColor = 'bg-blue'
    }
  } else {
    classColor = 'bg-light'
  }

  return (
    <div
      className={`Background position-fixed ${classColor}`}
      style={{ width: availableWidth, height: availableHeight }}
    />
  )
}

export default Background
