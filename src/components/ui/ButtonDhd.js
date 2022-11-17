import { Button } from 'react-bootstrap'
import { ArrowRight } from 'lucide-react'

const ButtonDhd = ({ title, icon, className, variant }) => {
  return (
    <Button className={className} variant={variant} size="lg">
      {title}
      {icon === true ? <ArrowRight /> : null}
    </Button>
  )
}
export default ButtonDhd
