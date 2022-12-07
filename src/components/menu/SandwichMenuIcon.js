import './SandwichMenuIcon.css'
import { Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { dataLocation } from '../../Data'

const SandwichMenuIcon = ({ menuStatus, currentStepIndex }) => {
  const location = useLocation()

  let classColor = ''

  const getLocation = () => {
    dataLocation.map((dataLocation, index) => {
      return location.pathname === dataLocation.location + '||'
    })
  }

  if (getLocation || menuStatus === 'open') {
    if ([1, 3, 4, 5, 6].includes(currentStepIndex) || menuStatus === 'open') {
      classColor = 'menu-white-color'
    } else {
      classColor = ''
    }
  }

  return (
    <Button className="menu-icon-wrapper" variant="none">
      <i className={`flex-center ${classColor}`}>
        <span></span>
        <span></span>
        <span></span>
      </i>
    </Button>
  )
}

export default SandwichMenuIcon
