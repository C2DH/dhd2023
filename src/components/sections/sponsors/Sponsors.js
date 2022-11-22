import './Sponsors.scss'

const { Container, Row, Col } = require('react-bootstrap')

const Sponsors = () => {
  return (
    <div className="footer-content-wrapper flex-grow-1">
      <Container>
        <Row>
          <Col className=" col-7 align-self-start">
            <h2>Wir danken unseren Sponsoren und Partnern für ihre Unterstützung!</h2>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Sponsors
