import './SecondaryMenu.scss'
import { dataSecondaryMenu } from '../../Data'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MenuClosed, useMenuStore } from '../../store'

const SecondaryMenu = () => {
  const setMenuStatus = useMenuStore((state) => state.setMenuStatus)

  return (
    <ul className="secondery-menu px-0">
      {dataSecondaryMenu.map(({ title, to, reloadDocument }, index) => {
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
              <Link to={to} onClick={() => setMenuStatus(MenuClosed)}>
                {title}{' '}
                <i>
                  <ArrowRight />
                </i>
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default SecondaryMenu
