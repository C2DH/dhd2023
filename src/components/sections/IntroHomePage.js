import "./IntroHomePage.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = ({ availableWidth, availableHeight }) => {
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
              <Button variant="primary" size="lg">
                Register
              </Button>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Intro;
