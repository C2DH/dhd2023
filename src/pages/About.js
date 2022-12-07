import { Col, Container, Row } from 'react-bootstrap'
import './Page.scss'

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
      <section className="d-flex mt-30">
        <Container>
          <Row>
            <Col sm={12} md={9} lg={7}>
              <h1 className="mb-3" dangerouslySetInnerHTML={{ __html: title }}></h1>
              <h4 className="mb-5" dangerouslySetInnerHTML={{ __html: splitter[1] }}></h4>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col sm={12} md={9} lg={7}>
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
