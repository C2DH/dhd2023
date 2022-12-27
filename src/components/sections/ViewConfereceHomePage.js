import ButtonDhd from '../ui/ButtonDhd.js'
const { Container, Row, Col } = require('react-bootstrap')
import { RegisterRoute } from '../../../constants'

const ViewConfereceHomePage = () => {
  return (
    <section className="view-conference flex-center">
      <div className="iview-conference-content-wrapper">
        <Container>
          <Row>
            <Col className="col col-sm-12 col-md-9 col-lg-7 offset-lg-5 offset-md-3 offset-sm-0 text-end">
              <div className="d-flex flex-column align-items-end">
                <h2>Rahmenprogramm</h2>
                <ButtonDhd
                  to={RegisterRoute.to}
                  className={'mt-4'}
                  variant={'primary'}
                  title={'Registrieren'}
                  iconType={ArrowRight}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default ViewConfereceHomePage
