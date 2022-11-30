import { Col, Container, Row } from 'react-bootstrap'
import './Page.scss'

import ButtonDhd from '../components/ui/ButtonDhd.js'

const About = ({ data }) => {
  if (!data) {
    return null
  }

  // const SrcSetRegexp = new RegExp('((?<=>)(.*?)(?=<.h2>))', 'i')

  const title = data.title?.rendered
  const content = String(data.content?.rendered)
  const removeHtml = content.replace(/<[^>]*>?/gm, '')

  const splitter = removeHtml.split('\n')

  // const hTwoExtracter = data.content?.rendered.match(SrcSetRegexp)

  console.log('[XXXXXXXXXX]', splitter)
  return (
    <div className="About">
      <section className="genric-page-intro d-flex">
        <Container>
          <Row>
            <Col className="col col-sm-12 col-md-9 col-lg-7">
              <h1>{title}</h1>
              <h4 className="my-3" dangerouslySetInnerHTML={{ __html: splitter[1] }}></h4>
            </Col>
            <div className="d-flex">
              <ButtonDhd
                className={'mt-0 mt-sm-4 download'}
                variant={'primary'}
                title={'About conference'}
                icon={true}
              />
            </div>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col className="col">
              <p dangerouslySetInnerHTML={{ __html: splitter[13] }}></p>
              <p dangerouslySetInnerHTML={{ __html: splitter[17] }}></p>
            </Col>
          </Row>
        </Container>
        {/* <h2 className="my-5">Programmkomitee</h2> */}
      </section>
    </div>
  )
}

export default About
