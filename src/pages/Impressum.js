import { Col, Container, Row } from 'react-bootstrap'
import './Page.scss'

const Impressum = ({ data }) => {
  if (!data) {
    return null
  }

  // const SrcSetRegexp = new RegExp('((?<=>)(.*?)(?=<.h2>))', 'i')

  const title = data.title?.rendered
  const content = String(data.content?.rendered)
  const removeHtml = content.replace(/<[^>]*>?/gm, '')

  const splitter = removeHtml.split('\n')
  const splitterHtml = content.split('\n')

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
              <p dangerouslySetInnerHTML={{ __html: splitterHtml[5] }}></p>
              <p dangerouslySetInnerHTML={{ __html: splitterHtml[9] }}></p>
              <p dangerouslySetInnerHTML={{ __html: splitterHtml[13] }}></p>
              <p dangerouslySetInnerHTML={{ __html: splitterHtml[17] }}></p>
              <p dangerouslySetInnerHTML={{ __html: splitterHtml[21] }}></p>
              <p dangerouslySetInnerHTML={{ __html: splitterHtml[25] }}></p>
              <p dangerouslySetInnerHTML={{ __html: splitterHtml[29] }}></p>
            </Col>
          </Row>
        </Container>
        {/* <h2 className="my-5">Programmkomitee</h2> */}
      </section>
    </div>
  )
}

export default Impressum
