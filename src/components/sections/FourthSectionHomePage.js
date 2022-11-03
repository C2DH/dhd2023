// import './Header.css'

const { Container, Row, Col, Button } = require("react-bootstrap");

const FourthSection = ({ availableWidth, availableHeight }) => {
  return (
    <section className="view-conference flex-center">
      <div className="iview-conference-content-wrapper">
        <Container>
          <Row>
            <Col className=" col-7 align-self-end offset-5 text-end">
              <h2>
                A unique experience of inspiration, meeting and networking for
                the ANY WORD industry
              </h2>
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

export default FourthSection;
