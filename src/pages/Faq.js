import { Col, Container, Row } from 'react-bootstrap'
import './Page.scss'

const Faq = ({ data }) => {
  console.log('[Faq]', data)
  if (!data) {
    return <div className="Faq" />
  }

  const title = data.title?.rendered
  const content = String(data.content?.rendered)
  // const removeHtml = content.replace(/<[^>]*>?/gm, '')
  // const splitter = removeHtml.split('\n')

  return (
    <div className="Faq mt-30">
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

export default Faq
