// import './Header.css'

const { Container, Row, Col } = require("react-bootstrap");

const Footer = ({ availableWidth, availableHeight }) => {
  return (
    <section className="view-conference flex-center">
      <div className="iview-conference-content-wrapper">
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
    </section>
  );
};

export default Footer;
