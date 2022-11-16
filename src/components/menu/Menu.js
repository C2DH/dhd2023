import './Menu.css'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import DropDownMenu from './DropDownMenu'
import { MenuOpen, MenuClosed, useMenuStore } from '../../store'
import { Link } from 'react-router-dom'
import { CfpRoute } from '../../constants'

const Menu = () => {
  const [dropdown, setDropdown] = useState(true)
  const menuStatus = useMenuStore((state) => state.menuStatus)
  console.log('menustus', MenuOpen)
  const toggleMenu = () => {
    setDropdown(!dropdown)
  }

  if (menuStatus === MenuOpen) {
    document.body.style.overflow = 'hidden'
  }

  if (menuStatus === MenuClosed) {
    document.body.style.overflow = 'auto'
  }

  return (
    <nav className="menu-wrapper">
      <ul className={menuStatus === MenuOpen ? 'd-none' : 'z-index-4'}>
        <li
          className={dropdown === false ? `active` : null}
          onClick={toggleMenu}
          onMouseOver={(event) => setDropdown(false)}
          onMouseOut={(event) => setDropdown(true)}
        >
          <div className="programm-events" href="/#" tabIndex={1}>
            Programm & Events
            {dropdown === false ? <Minus className="icon-plus" /> : <Plus className="icon-plus" />}
            <DropDownMenu />
          </div>
        </li>
        <li>
          <Link to="/team" tabIndex={1}>
            Komitee & team
          </Link>
        </li>
        <li>
          <Link to={CfpRoute.to} tabIndex={1}>
            {CfpRoute.label}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
