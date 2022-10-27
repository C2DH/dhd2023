import { Container, Row, Col, Button } from "react-bootstrap";
import "./MenuFullScreen.css";
import { Plus } from "lucide-react";
import { MenuClosed, useMenuStore } from "../../store";
import { a, useSpring } from "react-spring";
import { useEffect } from "react";
import { useCurrentWindowDimensions } from "../../hooks/viewport";

const MenuFullScreen = ({ isMobile }) => {
  const setMenuStatus = useMenuStore((state) => state.setMenuStatus);
  const menuStatus = useMenuStore((state) => state.menuStatus);
  const { width, height } = useCurrentWindowDimensions(isMobile);
  const [styles, api] = useSpring(() => ({
    x: width,
  }));

  useEffect(() => {
    console.debug("[MenuFullScreen] @useEffect menuStatus:", width);
    api.start({
      x: menuStatus === MenuClosed ? width : 0,
    });
  }, [menuStatus, api]);
  return (
    <a.section style={styles} className="menu-full-screen flex-center">
      <Container>
        <Row>
          <Col className="col-7">
            <div className="full-screen-menu-wrapper">
              <nav>
                <ul>
                  <li>
                    Programm & Events {menuStatus}
                    <Plus className="icon-plus" />
                  </li>
                  <li onClick={() => setMenuStatus(MenuClosed)}>
                    Komitee & Team
                  </li>
                  <li onClick={() => setMenuStatus(MenuClosed)}>
                    Call for Papers
                  </li>
                </ul>
                <Button variant="secondary">Register</Button>{" "}
              </nav>
            </div>
          </Col>
          <Col className="col-5"></Col>
        </Row>
      </Container>
    </a.section>
  );
};

export default MenuFullScreen;
