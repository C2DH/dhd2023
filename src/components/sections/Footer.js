import MenuFooter from "../menu/MenuFooter";

const { Container, Row, Col } = require("react-bootstrap");

const Footer = ({ availableWidth, availableHeight }) => {
  return (
    <footer className="footer h-100 flex-center">
      <div className="footer-content-wrapper flex-grow-1">
        <Container>
          <Row>
            <Col className=" col-7 align-self-start">
              <h2>
                A unique experience of inspiration, meeting and networking for
                the ANY WORD industry
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
      <MenuFooter />
    </footer>
  );
};

export default Footer;
