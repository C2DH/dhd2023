import { dataDropdown } from '../../Data'
import './DropDownMenu.scss'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const DropDownMenu = () => {
  return (
    <ul className="dropdown-menu">
      <div className="dropdown-menu-row-one">
        {dataDropdown.slice(0, 4).map(({ title, to, reloadDocument }, index) => {
          return (
            <li key={index}>
              {reloadDocument ? (
                <a href={to} target="_blank" rel="noreferrer">
                  {title}
                  <i>
                    <ArrowRight />
                  </i>
                </a>
              ) : (
                <Link to={to}>
                  {title}{' '}
                  <i>
                    <ArrowRight />
                  </i>
                </Link>
              )}
            </li>
          )
        })}
      </div>
      <div className="dropdown-menu-row-two">
        {dataDropdown.slice(4, 8).map(({ title, to, reloadDocument }, index) => {
          return (
            <li key={index}>
              {reloadDocument ? (
                <a href={to} target="_blank" rel="noreferrer">
                  {title}
                  <i>
                    <ArrowRight />
                  </i>
                </a>
              ) : (
                <Link to={to}>
                  {title}{' '}
                  <i>
                    <ArrowRight />
                  </i>
                </Link>
              )}
            </li>
          )
        })}
      </div>
    </ul>
  )
}

export default DropDownMenu
