import './IntroHomePage.css'
import { Container, Row, Col } from 'react-bootstrap'
import DateOfConference from './DateOfConference'
import ButtonDhd from '../../ui/ButtonDhd.js'
import { RegisterRoute } from '../../../constants'

const Intro = () => {
  // const [click, setClick] = useState(true)
  // console.log(click)
  // const setClickStatus = () => {
  //   setClick(!click)
  // }
  console.log('title', ButtonDhd)
  return (
    <section className="intro flex-center h-100">
      <div className="intro-content-wrapper">
        <Container>
          <Row>
            <Col sm={12} md={9} lg={7}>
              <h1>
                <b>Open</b>
                <br></br> Humanities
              </h1>
              <h1 className="mt-xs-1 mt-lg-3">
                <b>Open</b>
                <br></br> Culture
              </h1>
            </Col>
            <DateOfConference />
          </Row>
          <ButtonDhd
            to={RegisterRoute.to}
            className={'mt-2 mt-sm-4'}
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
