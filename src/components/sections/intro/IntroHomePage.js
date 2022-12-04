import './IntroHomePage.css'
import { Container, Row, Col } from 'react-bootstrap'
import DateOfConference from './DateOfConference'
import ButtonDhd from '../../ui/ButtonDhd.js'

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
            <Col className="col col-sm-12 col-md-9 col-lg-7">
              <h1>
                A unique experience of inspiration, meeting and networking for the ANY WORD industry
              </h1>
              <DateOfConference />
              <ButtonDhd
                className={'mt-0 mt-sm-4'}
                variant={'primary'}
                title={'Register'}
                iconType={'ArrowRight'}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Intro
