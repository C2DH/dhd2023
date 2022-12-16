import { dataFooterMenu } from '../../Data'
import { NavLink } from 'react-router-dom'
import './MenuFooter.scss'

const MenuFooter = () => {
  return (
    <div className="footer-menu-wrapper d-flex align-items-center">
      <p>© 2022</p>
      <span className="footer-line mx-3"></span>
      <ul className="d-flex align-content-flex-end">
        {dataFooterMenu.map(({ title, to, reloadDocument }, index) => {
          return (
            <li key={index}>
              {reloadDocument ? (
                <a href={to} target="_blank" rel="noreferrer">
                  {title}
                </a>
              ) : (
                <NavLink to={to}>{title}</NavLink>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MenuFooter
