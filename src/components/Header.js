import MenuFixed from './menu/MenuFixed'
import Menu from './menu/Menu'
import { useMenuStore } from '../store'

const Header = () => {
  const currentStepIndex = useMenuStore((state) => state.currentStepIndex)
  return (
    <>
      <MenuFixed currentStepIndex={currentStepIndex} />
      <Menu />
    </>
  )
}

export default Header
