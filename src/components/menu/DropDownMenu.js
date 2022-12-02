import { dataDropdown } from '../../Data'
import './DropDownMenu.css'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const DropDownMenu = () => {
  return (
    <ul className="dropdown-menu">
      <div className="dropdown-menu-row-one">
        {dataDropdown.slice(0, 4).map((dataDropdown, index) => {
          return (
            <li key={dataDropdown.title}>
              <Link
                to={dataDropdown.link}
                onClick={() => {
                  'cool'
                }}
              >
                {dataDropdown.title}
                <i>
                  <ArrowRight />
                </i>
              </Link>
            </li>
          )
        })}
      </div>
      <div className="dropdown-menu-row-two">
        {dataDropdown.slice(4, 7).map((dataDropdown, index) => {
          return (
            <li key={dataDropdown.title}>
              <a href="/">
                {dataDropdown.title}{' '}
                <i>
                  <ArrowRight />
                </i>
              </a>
            </li>
          )
        })}
      </div>
    </ul>
  )
}

export default DropDownMenu
