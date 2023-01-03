import { Container, Row, Col } from 'react-bootstrap'
import DateOfConference from './DateOfConference'
import ButtonDhd from '../../ui/ButtonDhd.js'
import { RegisterRoute } from '../../../constants'

const Intro = () => {
  return (
    <section className="intro align-items-center d-flex h-100">
      <div className="intro-content-wrapper">
        <Container>
          <Row>
            <Col sm={12} md={9} lg={7}>
              <h1>
                <span>#DHd2023</span>
                <b className="d-block mb-xs-2 mb-md-2">Open</b>
                Humanities
                <b className="d-block my-xs-2 my-md-2">Open</b>
                Culture
              </h1>
            </Col>
            <DateOfConference />
          </Row>
          <ButtonDhd
            to={RegisterRoute.to}
            className={'mt-4'}
            variant={'primary'}
            title={'Registrieren'}
            iconType={'ArrowRight'}
          />
        </Container>
      </div>
    </section>
  )
}

export default Intro
