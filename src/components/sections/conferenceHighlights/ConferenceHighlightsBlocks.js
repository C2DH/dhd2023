import { Col, Container, Row } from 'react-bootstrap'
import './ConferenceHighlightsBlocks.scss'

const ConferenceHighlightsBlocks = ({ data }) => {
  if (!Array.isArray(data)) {
    return null
  }

  return (
    <Row>
      {data.map((block) => {
        const content = String(block.content?.rendered)

        const removeHtml = content.replace(/<[^>]*>?/gm, '')

        const splitter = removeHtml.split('\n')
        console.debug('[ConferenceHighlightsBlocks]', removeHtml)
        return (
          <Col md={{ span: 6 }} sm={{ span: 6 }} lg={{ span: 4 }} key={block.id}>
            <div className="conference-text-block-w my-4">
              <h3>{block.title?.rendered}</h3>
              <h4 dangerouslySetInnerHTML={{ __html: splitter[0] }}></h4>
              <p dangerouslySetInnerHTML={{ __html: splitter[1] }}></p>
            </div>
          </Col>
        )
      })}
    </Row>
  )
}

export default ConferenceHighlightsBlocks
