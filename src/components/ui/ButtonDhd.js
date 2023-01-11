import { Button } from 'react-bootstrap'
import { ArrowRight, ArrowDown, FileDown, Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'
import './ButtonDhd.scss'

const ButtonDhd = ({
  title,
  iconType,
  className,
  variant,
  ariaControls,
  ariaExpanded,
  onClick,
  href,
  to,
  download,
}) => {
  const Icon = () => {
    if (iconType === 'ArrowRight') {
      return <ArrowRight />
    }
    if (iconType === 'FileDown') {
      return <FileDown />
    }
    if (iconType === 'ArrowDown') {
      return <ArrowDown />
    }
    if (iconType === 'Minus') {
      return <Minus />
    }
    if (iconType === 'Plus') {
      return <Plus />
    } else {
      return null
    }
  }

  if (to) {
    return (
      <Link className={`ButtonDhd btn btn-${variant} btn-lg  with-to ${className}`} to={to}>
        {title}
        {<Icon />}
      </Link>
    )
  }
  return (
    <Button
      href={href}
      download={''}
      onClick={onClick}
      className={`ButtonDhd ${className}`}
      variant={variant}
      size="lg"
      target="_blank"
      rel="noopener noreferrer"
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
    >
      {title}
      {<Icon />}
    </Button>
  )
}
export default ButtonDhd
