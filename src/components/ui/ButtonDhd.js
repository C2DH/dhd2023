import { Button } from 'react-bootstrap'
import { ArrowRight } from 'lucide-react'

const ButtonDhd = ({ title, icon, className, variant, ariaControls, ariaExpanded, onClick }) => {
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
      {icon === true ? <ArrowRight /> : null}
    </Button>
  )
}
export default ButtonDhd
