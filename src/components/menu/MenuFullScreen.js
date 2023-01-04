import { Container, Row, Col } from 'react-bootstrap'
import './MenuFullScreen.css'
import { MenuClosed, useMenuStore } from '../../store'
import { a, useSpring } from 'react-spring'
import { useEffect } from 'react'
import Menu from '../menu/Menu.js'
import Arch from '../Arch.js'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei'
import SecondaryMenu from './SecondaryMenu'
import MenuFooter from './MenuFooter'
import ButtonDhd from '../ui/ButtonDhd.js'
import { RegisterRoute } from '../../constants.js'

const MenuFullScreen = ({ isMobile, availableWidth, availableHeight }) => {
  const menuStatus = useMenuStore((state) => state.menuStatus)

  //MENU ANIMATION
  const [styles, api] = useSpring(() => ({
    x: availableWidth,
  }))

  useEffect(() => {
    api.start({
      x: menuStatus === MenuClosed ? availableWidth : 0,
    })
  }, [menuStatus, api, availableWidth])

  return (
    <a.div style={styles} className="menu-full-screen p-4 flex-center">
      <div className="scroll-wrapper position-relative ">
        <Container className="menu-block h-100 position-relative p-0 d-flex flex-column justify-content-md-center">
          <Row>
            <Col lg={7} md={12}>
              <div className="full-screen-menu-wrapper">
                <Menu classMenu={'fs'} />
              </div>
            </Col>
            <Col lg={5} md={12}>
              <SecondaryMenu />
            </Col>
          </Row>
          <ButtonDhd
            to={RegisterRoute.to}
            className={'mt-4 align-self-start'}
            variant={'primary'}
            title={'Registrieren'}
            iconType={'ArrowRight'}
          />
        </Container>
        <Container className="footer-menu-wrapper p-0 position-relative d-flex">
          <Row className="w-100">
            <MenuFooter />
          </Row>
        </Container>
      </div>

      <div
        id="menu-canvas-container"
        style={{ width: availableWidth, height: availableHeight, zIndex: 0 }}
        className="position-fixed top-0"
        // {...props}
      >
        <Canvas shadows camera={{ position: [-4, 1.5, 8], fov: 25 }}>
          <group scale={0.15} rotation={[0, 1.8, -0.02]} position={[1, -3.2, 0]}>
            <Arch
              position={[0, -1.5, 0]}
              menuStatus={menuStatus}
              color={'var(--primary)'}
              wireframe
            ></Arch>
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
          <Sparkles
            count={40}
            size={[5, 5, 10]}
            speed={0.1}
            scale={[3, 3, 10]}
            opacity={0.15}
            color={'white'}
          />
          <OrbitControls autoRotate={false} enableZoom={false} makeDefault enableRotate={false} />
        </Canvas>
      </div>
    </a.div>
  )
}

export default MenuFullScreen
