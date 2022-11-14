// import './Header.css'

const { Container, Row, Col, Button } = require("react-bootstrap");

const ViewConfereceHomePage = ({ availableWidth, availableHeight }) => {
  return (
    <section className="view-conference flex-center">
      <div className="iview-conference-content-wrapper">
        <Container>
          <Row>
            <Col className=" col-7 offset-5">
              <div className="d-flex flex-column align-items-end">
                <h2 className="text-end">
                  A unique experience of inspiration, meeting and networking for
                  the ANY WORD industry
                </h2>
                <Button className="mt-4" variant="primary" size="lg">
                  Register
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ViewConfereceHomePage;