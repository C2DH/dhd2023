import './Menu.scss'
import { useLayoutEffect, useState } from 'react'
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
  console.log('menustus', MenuOpen)
  const toggleMenu = () => {
    setDropdown(!dropdown)
  }

  // const togglePanel = () => {
  //   setIsCollapsed((prevState) => !prevState)
  // }

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

  useLayoutEffect(() => {
    console.debug(
      '[Menu] @useLayoutEffect \n - pathname:',
      pathname,
      '\n - menuStatus:',
      menuStatus,
    )
    if (menuStatus === MenuOpen) {
      setMenuStatus(MenuClosed)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <nav className="menu-wrapper">
      <ul className={menuStatus === MenuOpen ? 'd-none' : 'z-index-4'}>
        <li
          className={dropdown === false ? `active` : null}
          onClick={toggleMenu}
          onMouseOver={(event) => setDropdown(false)}
          onMouseOut={(event) => setDropdown(true)}
        >
          <div className="programm-events-wrapper">
            <div className="programm-events">
              Programm & Events
              {dropdown === false ? <Minus className="icon" /> : <Plus className="icon" />}
            </div>

            <DropDownMenu dropdown={dropdown} menuStatus={menuStatus} />
          </div>
        </li>
        <li>
          <NavLink
            // to="/team"
            to={KomiteeAndTeamRoute.to}
            tabIndex={1}
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
            tabIndex={1}
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
