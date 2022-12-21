// import { Col, Container, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import './PageMenu.scss'
import { ArrowRight } from 'lucide-react'
import { dataPageMenu } from '../../Data'

const PageMune = ({ onChange }) => {
  return (
    <nav class="PageMenu">
      <ul className="flex-wrap">
        {dataPageMenu.map(({ day, date, to }, index) => {
          return (
            <li key={index} className="my-2">
              <a
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
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default PageMune
