// import './Header.css'

const { Container, Row, Col, Button } = require('react-bootstrap')

const ThirdSection = ({ availableWidth, availableHeight }) => {
  return (
    <section className="view-conference flex-center">
      <div className="iview-conference-content-wrapper">
        <Container>
          <Row>
            <Col className=" col-7 align-self-start">
              <a id="section-team"></a>
              <h2>
                A unique experience of inspiration, meeting and networking for the ANY WORD industry
              </h2>
              <Button variant="primary" size="lg">
                Register
              </Button>{' '}
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default ThirdSection
