import { Col, Row } from 'react-bootstrap'
import './ConferenceHighlightsBlocks.scss'

const ConferenceHighlightsBlocks = ({ data }) => {
  if (!data) {
    return <div className="conference-text-block-w" />
  }

  return (
    <Row>
      {data.map((data) => {
        const title = data ? data.title.rendered : ''
        const content = data ? String(data.content.rendered) : ''

        const removeHtml = content.replace(/<[^>]*>?/gm, '')

        const splitter = removeHtml.split('\n')
        console.debug('[ConferenceHighlightsBlocks]', removeHtml)
        return (
          <Col md={{ span: 6 }} sm={{ span: 6 }} lg={{ span: 4 }} key={data.id}>
            <div className="conference-text-block-w my-4">
              <h4 className="blue" dangerouslySetInnerHTML={{ __html: title }}></h4>
              <h3 dangerouslySetInnerHTML={{ __html: splitter[0] }}></h3>
              <p dangerouslySetInnerHTML={{ __html: splitter[1] }}></p>
            </div>
          </Col>
        )
      })}
    </Row>
  )
}

export default ConferenceHighlightsBlocks
