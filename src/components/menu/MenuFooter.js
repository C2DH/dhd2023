import { dataFooterMenu } from '../../Data'
import { Link } from 'react-router-dom'
import './MenuFooter.scss'

const MenuFooter = () => {
  return (
    <div className="footer-menu-wrapper d-flex align-items-center">
      <p>© 2022</p>
      <span className="footer-line mx-3"></span>
      <ul className="d-flex align-content-flex-end">
        {dataFooterMenu.map((dataFooterMenu, index) => {
          return (
            <li key={dataFooterMenu.title}>
              <Link
                to={dataFooterMenu.link}
                onClick={() => {
                  'cool'
                }}
              >
                {dataFooterMenu.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MenuFooter
