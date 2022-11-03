import { Container, Row, Col, Button } from "react-bootstrap";
import "./MenuFullScreen.css";
import { MenuClosed, useMenuStore } from "../../store";
import { a, useSpring } from "react-spring";
import { useEffect } from "react";
import { useCurrentWindowDimensions } from "../../hooks/viewport";
import Menu from "../menu/Menu.js";
import Arch from "../Arch.js";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

const MenuFullScreen = ({ isMobile, availableWidth, availableHeight }) => {
  // const setMenuStatus = useMenuStore((state) => state.setMenuStatus);
  const menuStatus = useMenuStore((state) => state.menuStatus);
  const { width } = useCurrentWindowDimensions(isMobile);
  const [styles, api] = useSpring(() => ({
    x: width,
  }));

  useEffect(() => {
    // console.debug("[MenuFullScreen] @useEffect menuStatus:", width);
    api.start({
      x: menuStatus === MenuClosed ? width : 0,
    });
  }, [menuStatus, api, width]);
  return (
    <a.section style={styles} className="menu-full-screen flex-center">
      <Container>
        <Row>
          <Col className="col-7">
            <div className="full-screen-menu-wrapper">
              <Menu />
              <Button variant="secondary">Register</Button>{" "}
            </div>
          </Col>
          <Col className="col-5"></Col>
        </Row>
      </Container>
      <div
        id="menu-canvas-container"
        style={{ width: availableWidth, height: availableHeight, zIndex: 0 }}
        className="position-fixed top-0"
        // {...props}
      >
        <Canvas shadows camera={{ position: [-4, 1.5, 8], fov: 25 }}>
          <group
            scale={0.15}
            rotation={[0, 1.8, -0.02]}
            position={[1, -1.7, 0]}
          >
            <Arch color={"#000000"}></Arch>
          </group>
          <fog attach="fog" args={["#312a24", 0.01, 0]} />
          <ambientLight intensity={0.5} />
          {/* <directionalLight intensity={0.5} position={[5, 10, 10]} color="#d2e9fe" /> */}
          <spotLight
            intensity={1}
            position={[5, 10, 15]}
            angle={0.15}
            penumbra={0.5}
            shadow-mapSize={[512, 512]}
            castShadow
          />
          {/* <spotLight position={[0, 3, -3]} angle={0.2} penumbra={1} intensity={1} /> */}
          <OrbitControls autoRotate={false} enableZoom={false} />
          <Environment rotation={[Math.PI / 2, 0, 5]} preset="sunset" />
        </Canvas>
      </div>
    </a.section>
  );
};

export default MenuFullScreen;
