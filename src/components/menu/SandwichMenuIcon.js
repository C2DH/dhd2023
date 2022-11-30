import './SandwichMenuIcon.css'
import { Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const SandwichMenuIcon = ({ menuStatus, currentStepIndex }) => {
  const location = useLocation()

  let classColor = ''

  if (
    location.pathname === '/' ||
    location.pathname === '/page/cfp' ||
    location.pathname === '/team' ||
    location.pathname === '/page/zeitschiene' ||
    menuStatus === 'open'
  ) {
    if ([1, 3, 4, 5, 6].includes(currentStepIndex) || menuStatus === 'open') {
      classColor = 'menu-white-color'
    } else {
      classColor = ''
    }
  }

  return (
    <Button tabIndex={0} className="menu-icon-wrapper">
      <i className={`flex-center ${classColor}`}>
        <span></span>
        <span></span>
        <span></span>
      </i>
    </Button>
  )
}

export default SandwichMenuIcon
