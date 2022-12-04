import { Container, Row, Col } from 'react-bootstrap'
import './MenuFullScreen.css'
import { MenuClosed, useMenuStore } from '../../store'
import { a, useSpring } from 'react-spring'
import { useEffect } from 'react'
import { useCurrentWindowDimensions } from '../../hooks/viewport'
import Menu from '../menu/Menu.js'
import Arch from '../Arch.js'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import SecondaryMenu from './SecondaryMenu'
import MenuFooter from './MenuFooter'
import ButtonDhd from '../ui/ButtonDhd.js'
import { ArrowRight } from 'lucide-react'

const MenuFullScreen = ({ isMobile, availableWidth, availableHeight }) => {
  const menuStatus = useMenuStore((state) => state.menuStatus)
  const { width } = useCurrentWindowDimensions(isMobile)
  const [styles, api] = useSpring(() => ({
    x: width,
  }))

  useEffect(() => {
    // console.debug("[MenuFullScreen] @useEffect menuStatus:", width);
    api.start({
      x: menuStatus === MenuClosed ? width : 0,
    })
  }, [menuStatus, api, width])

  return (
    <a.div style={styles} className="menu-full-screen p-4 flex-center">
      <Container className="menu-block h-100 position-relative p-0 d-flex flex-column justify-content-sm-center">
        <Row>
          <Col lg={7} md={12}>
            <div className="full-screen-menu-wrapper">
              <Menu />
            </div>
          </Col>
          <Col lg={5} md={12}>
            <SecondaryMenu />
          </Col>
        </Row>
        <ButtonDhd
          className={'mt-4 align-self-start'}
          variant={'primary'}
          title={'Register'}
          // iconType={ArrowRight}
        />
      </Container>
      <Container className="position-relative p-0 d-flex">
        <Row>
          <Col lg={7} md={12}>
            <MenuFooter />
          </Col>
        </Row>
      </Container>

      <div
        id="menu-canvas-container"
        style={{ width: availableWidth, height: availableHeight, zIndex: 0 }}
        className="position-fixed top-0"
        // {...props}
      >
        <Canvas shadows camera={{ position: [-4, 1.5, 8], fov: 25 }}>
          <group scale={0.15} rotation={[0, 1.8, -0.02]} position={[1, -3.2, 0]}>
            <Arch menuStatus={menuStatus} color={'var(--primary)'} wireframe></Arch>
          </group>
          <fog attach="fog" args={['#312a24', 0.01, 0]} />
          <ambientLight intensity={0.5} />

          <spotLight
            intensity={1}
            position={[5, 10, 15]}
            angle={0.15}
            penumbra={0.5}
            shadow-mapSize={[512, 512]}
            castShadow
          />

          <OrbitControls autoRotate={false} enableZoom={false} />
        </Canvas>
      </div>
    </a.div>
  )
}

export default MenuFullScreen
