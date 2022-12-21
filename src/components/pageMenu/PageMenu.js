// import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './PageMenu.scss'
import { ArrowRight } from 'lucide-react'
import { dataPageMenu } from '../../Data'

const PageMune = ({ onChange, displayDay }) => {
  return (
    <nav class="PageMenu">
      <ul className="flex-wrap">
        {dataPageMenu.map(({ day, date }, index) => {
          return (
            <li key={index}>
              <Link
                className={displayDay === index ? 'active my-2' : 'my-2'}
                onClick={(e) => {
                  if (typeof onChange === 'function') {
                    onChange(index)
                  }
                  e.preventDefault()
                }}
              >
                <div className="nav-group">
                  <b>{day}</b>
                  <span>{date}</span>
                </div>
                <i>
                  <ArrowRight />
                </i>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default PageMune
