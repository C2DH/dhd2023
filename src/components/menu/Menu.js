import './Menu.scss'
import { useLayoutEffect, useState, useEffect } from 'react'
import { Plus, Minus } from 'lucide-react'
import DropDownMenu from './DropDownMenu'
import { MenuOpen, MenuClosed, useMenuStore } from '../../store'
import { NavLink, useLocation } from 'react-router-dom'
import { CfpRoute, KomiteeAndTeamRoute } from '../../constants'

const Menu = () => {
  const [dropdown, setDropdown] = useState(true)
  const { pathname } = useLocation()
  const menuStatus = useMenuStore((state) => state.menuStatus)
  const setMenuStatus = useMenuStore((state) => state.setMenuStatus)
  useEffect(() => {
    setActive()
  }, [pathname, menuStatus])

  const toggleMenu = () => {
    setDropdown(!dropdown)
  }

  if (menuStatus === MenuOpen) {
    document.body.style.overflow = 'hidden'
  }

  if (menuStatus === MenuClosed) {
    document.body.style.overflow = 'auto'
  }

  const menuClickEvent = () => {
    if (menuStatus === MenuOpen) {
      setMenuStatus(menuStatus === MenuOpen ? MenuClosed : MenuOpen)
    }
  }

  const setActive = () => {
    const elem = document.getElementById('top-menu')
    if (document.querySelectorAll('#top-menu .programm-events-wrapper .active').length > 0) {
      elem.classList.add('active')
    } else {
      elem.classList.remove('active')
    }
  }

  useLayoutEffect(() => {
    if (menuStatus === MenuOpen) {
      setMenuStatus(MenuClosed)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <nav id="top-menu" className="menu-wrapper">
      <ul className={menuStatus === MenuOpen ? 'd-none' : 'z-index-4'}>
        <li>
          <NavLink
            to="/"
            onClick={() => {
              menuClickEvent()
            }}
          >
            Home
          </NavLink>
        </li>
        <li
          className={dropdown === false ? `active` : null}
          onClick={toggleMenu}
          onMouseOver={(event) => setDropdown(false)}
          onMouseOut={(event) => setDropdown(true)}
        >
          <div className="programm-events-wrapper">
            <div className="programm-events">
              Programm & Events
              <i>{dropdown === false ? <Minus className="icon" /> : <Plus className="icon" />}</i>
            </div>
            <DropDownMenu dropdown={dropdown} menuStatus={menuStatus} />
          </div>
        </li>
        <li>
          <NavLink
            to={KomiteeAndTeamRoute.to}
            onClick={() => {
              menuClickEvent()
            }}
          >
            Komitee & team
          </NavLink>
        </li>
        <li>
          <NavLink
            to={CfpRoute.to}
            onClick={() => {
              menuClickEvent()
            }}
          >
            {CfpRoute.label}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
