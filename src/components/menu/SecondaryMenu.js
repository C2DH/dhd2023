import './SecondaryMenu.scss'
import { dataSecondaryMenu } from '../../Data'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const SecondaryMenu = () => {
  return (
    <ul className="secondery-menu px-0">
      {dataSecondaryMenu.map((dataSecondaryMenu, index) => {
        return (
          <li key={dataSecondaryMenu.title}>
            <Link to={dataSecondaryMenu.link}>
              {dataSecondaryMenu.title}
              <i>
                <ArrowRight />
              </i>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default SecondaryMenu
