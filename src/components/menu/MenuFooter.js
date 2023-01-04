import { dataFooterMenu } from '../../Data'
import { NavLink } from 'react-router-dom'
import './MenuFooter.scss'

const MenuFooter = () => {
  return (
    <div className="footer-menu-wrapper d-flex align-items-center">
      <p>© 2022</p>
      <span className="footer-line ms-3"></span>
      <ul className="d-flex align-content-flex-end">
        {dataFooterMenu.map(({ title, to, reloadDocument }, index) => {
          return (
            <li key={index} className="ms-3">
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
        <li className="ms-3">
          <a
            href={`${process.env.REACT_APP_GITHUB_REPO}/commit/${process.env.REACT_APP_GIT_REVISION}`}
          >
            v.&nbsp;{process.env.REACT_APP_GIT_REVISION}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MenuFooter
