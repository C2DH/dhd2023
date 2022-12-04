import { Button } from 'react-bootstrap'
import { ArrowRight, ArrowDown, FileDown, Plus } from 'lucide-react'

const ButtonDhd = ({
  title,
  iconType,
  className,
  variant,
  ariaControls,
  ariaExpanded,
  onClick,
}) => {
  const icon = () => {
    if (iconType === 'ArrowRight') {
      return <ArrowRight />
    }
    if (iconType === 'FileDown') {
      return <FileDown />
    }
    if (iconType === 'ArrowDown') {
      return <ArrowDown />
    }
    if (iconType === 'Plus') {
      return <Plus />
    } else {
      return null
    }
  }

  return (
    <Button
      onClick={onClick}
      className={className}
      variant={variant}
      size="lg"
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
    >
      {title}
      {icon()}
    </Button>
  )
}
export default ButtonDhd
