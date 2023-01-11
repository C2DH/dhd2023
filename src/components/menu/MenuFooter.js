import { dataFooterMenu } from '../../Data'
import { NavLink } from 'react-router-dom'
import './MenuFooter.scss'
import { Github } from 'lucide-react'

const MenuFooter = () => {
  return (
    <div className="footer-menu-wrapper d-flex align-items-center">
      <p>© 2022</p>
      <span className="footer-line ms-3"></span>
      <ul className="d-flex align-content-flex-end align-items-center">
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
            aria-label="go to github repository for this version"
            title="go to github repository for this version"
            href={`${process.env.REACT_APP_GITHUB_REPO}/commit/${process.env.REACT_APP_GIT_REVISION}`}
          >
            <Github size={12} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MenuFooter
