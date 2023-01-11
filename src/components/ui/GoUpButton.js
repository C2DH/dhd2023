import './GoUpButton.scss'
import { ArrowUp } from 'lucide-react'

const GoUpButton = () => {
  const onClick = (e) => {
    window.scrollTo(0, 0)
    e.preventDefault()
  }

  return (
    //eslint-disable-next-line
    <a href={void 0} onClick={onClick} className="GoUpButton">
      <i>
        <ArrowUp />
      </i>
      <span>TOP</span>
    </a>
  )
}
export default GoUpButton
