import { Col, Container, Row } from 'react-bootstrap'
import './Page.scss'

const Location = ({ data }) => {
  if (!data) {
    return null
  }

  // const SrcSetRegexp = new RegExp('((?<=>)(.*?)(?=<.h2>))', 'i')

  const title = data.title?.rendered
  const content = String(data.content?.rendered)
  // const removeHtml = content.replace(/<[^>]*>?/gm, '')

  // const splitter = removeHtml.split('\n')
  const splitterHTML = content.split('<pre>Split content</pre>')
  const Belval = splitterHTML.slice(0, 1)
  const englishVerBelval = splitterHTML.slice(1, 2)
  const germanVerBelval = splitterHTML.slice(2, 3)
  const Trier = splitterHTML.slice(3, 4)
  const englishVerTrier = splitterHTML.slice(4, 5)
  const germanVerTrier = splitterHTML.slice(5, 6)
  const BelvalTrier = splitterHTML.slice(6, 7)
  const englishVerBelvalTrier = splitterHTML.slice(7, 8)
  const germanVerBelvalTrier = splitterHTML.slice(8, 9)

  // const hTwoExtracter = data.content?.rendered.match(SrcSetRegexp)

  console.log('[LOCATION]', splitterHTML)
  return (
    <div className="Location">
      <section className="d-flex mt-30">
        <Container className="mb-30">
          <h1 className="mb-5" dangerouslySetInnerHTML={{ __html: title }}></h1>
          <div className="mb-4" dangerouslySetInnerHTML={{ __html: Belval }}></div>
          <Row>
            <Col sm={12} lg={6}>
              <div
                className="eng-ver mb-5"
                dangerouslySetInnerHTML={{ __html: englishVerBelval }}
              ></div>
            </Col>
            <Col sm={12} lg={6}>
              <div
                className="de-ver mb-5"
                dangerouslySetInnerHTML={{ __html: germanVerBelval }}
              ></div>
            </Col>
          </Row>
          <div className="mb-4" dangerouslySetInnerHTML={{ __html: Trier }}></div>
          <Row>
            <Col sm={12} lg={6}>
              <div
                className="eng-ver mb-5"
                dangerouslySetInnerHTML={{ __html: englishVerTrier }}
              ></div>
            </Col>
            <Col sm={12} lg={6}>
              <div
                className="de-ver mb-5"
                dangerouslySetInnerHTML={{ __html: germanVerTrier }}
              ></div>
            </Col>
          </Row>
          <div className="mb-4" dangerouslySetInnerHTML={{ __html: BelvalTrier }}></div>
          <Row>
            <Col sm={12} lg={6}>
              <div
                className="eng-ver no-h mb-5"
                dangerouslySetInnerHTML={{ __html: englishVerBelvalTrier }}
              ></div>
            </Col>
            <Col sm={12} lg={6}>
              <div
                className="de-ver no-h mb-5"
                dangerouslySetInnerHTML={{ __html: germanVerBelvalTrier }}
              ></div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Location
