import React from 'react'
import { useLocation } from 'react-router-dom'
import { useMenuStore } from '../store'
import './Background.css'

const Background = () => {
  const currentStepIndex = useMenuStore((state) => state.currentStepIndex)
  const location = useLocation()
  // const [locationState, location] = useState(true)

  let classColor = 'bg-light'

  if (
    location.pathname === '/' ||
    location.pathname === '/team' ||
    location.pathname === '/page/cfp' ||
    location.pathname === '/page/zeitschiene'
  ) {
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

  // console.debug('[Background] classColor:', classColor)

  return (
    <div
      className={`Background position-fixed w-100 h-100 ${classColor}`}
      // style={{ backgroundColor: 'red' }}
    />
  )
}

export default Background
