import MenuFixed from './MenuFixed'
import Menu from './Menu'
import { useMenuStore } from '../../store'

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
