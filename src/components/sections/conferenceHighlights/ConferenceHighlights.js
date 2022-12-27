import ButtonDhd from '../../ui/ButtonDhd.js'
import ConferenceHighlightsBlocks from '../conferenceHighlights/ConferenceHighlightsBlocks.js'
import StaticPageLoader from '../../StaticPageLoader.js'
import { ConferenceHighlightsRoute } from '../../../constants.js'
import { RegisterRoute } from '../../../constants'

const { Container, Row, Col } = require('react-bootstrap')

const ConferenceHighlights = () => {
  return (
    <section className="view-conference flex-center">
      <div className="iview-conference-content-wrapper">
        <Container>
          <Row>
            <Col className="col col-sm-12 col-md-9 col-lg-7 offset-lg-5 offset-md-3 offset-sm-0 text-end">
              <div className="d-flex flex-column align-items-end">
                <h2>Rahmenprogramm</h2>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <StaticPageLoader
            url={ConferenceHighlightsRoute.contentUrl}
            Component={ConferenceHighlightsBlocks}
          ></StaticPageLoader>
          <ButtonDhd
            to={RegisterRoute.to}
            className={'mt-4'}
            variant={'primary'}
            title={'Registrieren'}
            iconType={'ArrowRight'}
          />
        </Container>
      </div>
    </section>
  )
}

export default ConferenceHighlights
