import ButtonDhd from '../../ui/ButtonDhd.js'
import ConferenceHighlightsBlocks from '../conferenceHighlights/ConferenceHighlightsBlocks.js'
import StaticPageLoader from '../../StaticPageLoader.js'
import { ConferenceHighlightsRoute } from '../../../constants.js'

const { Container, Row, Col } = require('react-bootstrap')

const ConferenceHighlights = () => {
  return (
    <section className="view-conference flex-center">
      <div className="iview-conference-content-wrapper">
        <Container>
          <Row>
            <Col className="col col-sm-12 col-md-9 col-lg-7 offset-lg-5 offset-md-3 offset-sm-0 text-end">
              <div className="d-flex flex-column align-items-end">
                <h2>
                  A unique experience of inspiration, meeting and networking for the ANY WORD
                  industry
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <StaticPageLoader
            url={ConferenceHighlightsRoute.contentUrl}
            Component={ConferenceHighlightsBlocks}
          ></StaticPageLoader>
          <ButtonDhd className={'mt-4'} variant={'primary'} title={'Register'} icon={true} />
        </Container>
      </div>
    </section>
  )
}

export default ConferenceHighlights