import './Sponsors.scss'
import NfdiForMemoryLogo from '../../svg/NfdiForMemoryLogo'
import CnfdiLogo from '../../svg/CnfdiLogo'
import CultureAndComputationLogo from '../../svg/CultureAndComputationLabLogo'
import KompetenzzentrumLogo from '../../svg/KompetenzzentrumLogo.js'
import UniTrierLogo from '../../svg/UniTrierLogo.js'
import UniLogos from '../../svg/UniLogo.js'

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
        {/* <Row>
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
        </Row> */}
        <Row>
          <h4 className="blue mt-5">Förderer und Sponsoren</h4>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col sm={6} lg={4}>
            <i className="w-100 m-0 p-sm-3 p-lg-5 p-5">
              <UniTrierLogo />
            </i>
          </Col>
          <Col sm={6} lg={4}>
            <i className="w-100 m-0 p-sm-3 p-lg-5 p-5">
              <UniLogos />
            </i>
          </Col>
          <Col sm={6} lg={4}>
            <i className="w-100 m-0 p-sm-3 p-lg-5 p-5">
              <KompetenzzentrumLogo />
            </i>
          </Col>
          <Col sm={6} lg={4}>
            <i className="w-100 m-0 p-sm-3 p-lg-5 p-5">
              <CultureAndComputationLogo />
            </i>
          </Col>
          <Col sm={6} lg={4}>
            <i className="w-100 m-0 p-sm-3 p-lg-5 p-5">
              <NfdiForMemoryLogo />
            </i>
          </Col>
          <Col sm={6} lg={4}>
            <i className="w-100 m-0 p-sm-3 p-lg-5 p-5">
              <CnfdiLogo />
            </i>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Sponsors
