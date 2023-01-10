import React from 'react'
import SandwichMenuIcon from './SandwichMenuIcon'
import Dhd2023Logo from '../svg/dhd2023Logo'
import { MenuClosed, MenuOpen, useMenuStore } from '../../store'
import { Link } from 'react-router-dom'
import './MenuFixed.scss'

const MenuFixed = ({ currentStepIndex }) => {
  const menuStatus = useMenuStore((state) => state.menuStatus)
  const setMenuStatus = useMenuStore((state) => state.setMenuStatus)

  const menuClickEvent = () => {
    if (menuStatus === MenuOpen) {
      setMenuStatus(menuStatus === MenuOpen ? MenuClosed : MenuOpen)
    }
  }

  return (
    <header className="menu-fixed">
      <Link
        className="logo"
        to="/"
        tabIndex={1}
        onClick={() => {
          menuClickEvent()
        }}
      >
        <Dhd2023Logo currentStepIndex={currentStepIndex} menuStatus={menuStatus} />
      </Link>

      <div
        className={`sandwich-menu ${menuStatus === MenuOpen ? 'active' : ''} `}
        onClick={() => {
          setMenuStatus(menuStatus === MenuOpen ? MenuClosed : MenuOpen)
        }}
      >
        <SandwichMenuIcon menuStatus={menuStatus} currentStepIndex={currentStepIndex} />
      </div>
    </header>
  )
}

export default MenuFixed
