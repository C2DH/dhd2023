import './Header.css'
import Dhd2023Logo from '../../components/svg/dhd2023_logo'

const Header = ({ availableWidth, availableHeight }) => {
  return (
    <section>
      <header>
        <Dhd2023Logo />
        <div className="header-menu"></div>
        <h1>
          QQQQ A unique experience of inspiration, meeting and networking for the ANY WORD industry
        </h1>
      </header>
    </section>
  )
}

export default Header
