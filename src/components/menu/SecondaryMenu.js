import './SecondaryMenu.scss'
import { dataSecondaryMenu } from '../../Data'
import { ArrowRight } from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'
import { MenuClosed, useMenuStore } from '../../store'
// import { useLayoutEffect } from 'react'

const SecondaryMenu = () => {
  const setMenuStatus = useMenuStore((state) => state.setMenuStatus)
  // const scrollToFooter = useLayoutEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <ul className="secondery-menu px-0">
      {dataSecondaryMenu.map(({ title, to, reloadDocument }, index) => {
        console.log('YES', index)
        if (title === 'Kontakt') {
          return (
            <li key={index}>
              <Link
                onClick={() => {
                  setMenuStatus(MenuClosed)
                  window.scrollTo(0, document.body.scrollHeight)
                }}
              >
                {title}{' '}
                <i>
                  <ArrowRight />
                </i>
              </Link>
            </li>
          )
        } else {
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
                <NavLink to={to} onClick={() => setMenuStatus(MenuClosed)}>
                  {title}{' '}
                  <i>
                    <ArrowRight />
                  </i>
                </NavLink>
              )}
            </li>
          )
        }
      })}
    </ul>
  )
}

export default SecondaryMenu
