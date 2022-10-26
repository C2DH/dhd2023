// import './Header.css'

const { Container, Row, Col } = require("react-bootstrap");

const ViewConfereceHomePage = ({ availableWidth, availableHeight }) => {
  return (
    <section className="view-conference flex-center">
      <div className="iview-conference-content-wrapper">
        <Container>
          <Row>
            <Col className=" col-7 align-self-end offset-5">
              <h1 className="text-end">
                A unique experience of inspiration, meeting and networking for
                the ANY WORD industry
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ViewConfereceHomePage;
