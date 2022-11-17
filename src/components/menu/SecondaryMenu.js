import './SecondaryMenu.css'
import { dataSecondaryMenu } from '../../Data'

const SecondaryMenu = () => {
  return (
    <ul className="secondery-menu px-sm-0 px-md-4">
      {dataSecondaryMenu.map((dataSecondaryMenu, index) => {
        return (
          <li key={dataSecondaryMenu.title}>
            <a href="/">{dataSecondaryMenu.title} </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SecondaryMenu
