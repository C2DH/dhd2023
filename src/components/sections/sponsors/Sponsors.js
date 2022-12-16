import './Sponsors.scss'
import NfdiForMemoryLogo from '../../svg/NfdiForMemoryLogo'
import CnfdiLogo from '../../svg/CnfdiLogo'

const { Container, Row, Col } = require('react-bootstrap')

const Sponsors = () => {
  return (
    <div className="sponsors footer-content-wrapper flex-grow-1 mb-15 mt-15">
      <Container>
        <Row>
          <Col sm={12} md={7} className="align-self-start">
            <h2>Wir danken unseren Sponsoren und Partnern für ihre Unterstützung!</h2>
          </Col>
        </Row>
      </Container>
      <Container className="logos d-flex flex-wrap justify-content-center">
        <Row>
          <h4 className="blue">Partner</h4>
        </Row>
        <Row className="justify-content-center  mt-4">
          <i>
            <CnfdiLogo />
          </i>
          <i>
            <NfdiForMemoryLogo />
          </i>
          <i>
            <CnfdiLogo />
          </i>
        </Row>
        <Row>
          <h4 className="blue mt-5">Förderer und Sponsoren</h4>
        </Row>
        <Row className="justify-content-center mt-4">
          <i>
            <NfdiForMemoryLogo />
          </i>
          <i>
            <CnfdiLogo />
          </i>
          <i>
            <NfdiForMemoryLogo />
          </i>
        </Row>
      </Container>
    </div>
  )
}

export default Sponsors
