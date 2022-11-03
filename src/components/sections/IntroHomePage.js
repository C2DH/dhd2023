import "./IntroHomePage.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

const Intro = ({ availableWidth, availableHeight }) => {
  const [click, setClick] = useState(true);
  console.log(click);
  const setClickStatus = () => {
    setClick(!click);
  };

  return (
    <section className="intro flex-center">
      <div className="intro-content-wrapper">
        <Container>
          <Row>
            <Col className="col-7">
              <h1>
                A unique experience of inspiration, meeting and networking for
                the ANY WORD industry
              </h1>
              <Button onClick={setClickStatus} variant="primary" size="lg">
                {click === false ? "Register" : "Registed"}
              </Button>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Intro;
