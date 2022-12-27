// import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './PageMenu.scss'
import { ArrowRight } from 'lucide-react'

const PageMune = ({ onChange, displayDay, menuData }) => {
  return (
    <nav class="PageMenu">
      <ul className="flex-wrap">
        {menuData.map(({ title, subTitle }, index) => {
          console.log('displayDay', menuData)
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
                  <b>{title}</b>
                  <span>{subTitle}</span>
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
