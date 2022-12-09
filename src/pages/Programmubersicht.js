import { Col, Container, Row } from 'react-bootstrap'
import './Zeitschiene.scss'
import './Page.scss'

const Programmubersicht = ({ data }) => {
  console.log('[Programmubersicht]', data)
  if (!data) {
    return <div className="Programmubersicht" />
  }

  const title = data.title?.rendered
  const content = String(data.content?.rendered)
  // const removeHtml = content.replace(/<[^>]*>?/gm, '')
  // const splitter = removeHtml.split('\n')

  return (
    <div className="Programmubersicht mt-30">
      <section>
        <Container>
          <Row>
            <Col sx={12} md={{ span: 8 }}>
              <h1 dangerouslySetInnerHTML={{ __html: title }} className="mb-5"></h1>
              <section dangerouslySetInnerHTML={{ __html: content }}></section>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Programmubersicht
