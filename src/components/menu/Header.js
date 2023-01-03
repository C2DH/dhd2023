import MenuFixed from './MenuFixed'
import Menu from './Menu'
import { useMenuStore, MenuClosed } from '../../store'

const Header = () => {
  const menuStatus = useMenuStore((state) => state.menuStatus)
  const currentStepIndex = useMenuStore((state) => state.currentStepIndex)
  return (
    <>
      <MenuFixed currentStepIndex={currentStepIndex} />
      {menuStatus === MenuClosed ? <Menu /> : null}
    </>
  )
}

export default Header
