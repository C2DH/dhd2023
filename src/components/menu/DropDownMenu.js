import { dataDropdown } from '../../Data'
import './DropDownMenu.scss'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSpring, animated, config } from 'react-spring'
import { useBoundingClientRect } from '../../hooks/viewport.js'

const DropDownMenu = ({ dropdown }) => {
  // DROPDOWN ANIMATION

  const [bbox, ref] = useBoundingClientRect()

  const slideInStyles = useSpring({
    config: { mass: 2, tension: 200, friction: 40 },
    from: { height: 0, opacity: 1 },
    to: {
      opacity: !dropdown ? 1 : 0,
      height: !dropdown ? bbox.height : 0,
    },
  })

  console.log('dropdown-menu', dropdown, bbox.height)

  return (
    <ul className="dropdown-menu">
      <animated.div style={{ ...slideInStyles, overflow: 'hidden' }}>
        <div className="d-flex" ref={ref}>
          <div className="dropdown-menu-row-one">
            {dataDropdown.slice(0, 4).map(({ title, to, reloadDocument }, index) => {
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
                    <Link to={to}>
                      {title}{' '}
                      <i>
                        <ArrowRight />
                      </i>
                    </Link>
                  )}
                </li>
              )
            })}
          </div>
          <div className="dropdown-menu-row-two">
            {dataDropdown.slice(4, 8).map(({ title, to, reloadDocument }, index) => {
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
                    <Link to={to}>
                      {title}{' '}
                      <i>
                        <ArrowRight />
                      </i>
                    </Link>
                  )}
                </li>
              )
            })}
          </div>
        </div>
      </animated.div>
    </ul>
  )
}

export default DropDownMenu
