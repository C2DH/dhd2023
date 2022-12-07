import ImageGrid from '../components/sections/team/ImageGrid.js'
import { Col, Container, Row } from 'react-bootstrap'
import { TeamRoute } from '../constants.js'
import StaticPageLoader from '../components/StaticPageLoader.js'
import './Page.scss'

const KomiteeAndTeam = ({ data }) => {
  console.log('[XXXXXXXXXX]', data)
  if (!data) {
    return null
  }

  // const SrcSetRegexp = new RegExp('(?<=<h2>)(.*?)(?=</h2>)', 'i')
  const title = data.title?.rendered
  // const content = data.content?.rendered
  // const hTwoExtracter = content.match(SrcSetRegexp)

  return (
    <div className="KomiteeAndTeam mt-30">
      <section>
        <Container>
          <Row>
            <Col className="col col-sm-12 col-md-9 col-lg-7">
              <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
              <h4 className="my-3">Get inspired by our amazing speakers on 14 nov</h4>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col sm={12} md={8}>
              <h2 className="my-5">Programmkomitee</h2>
            </Col>
          </Row>
          <Row>
            <StaticPageLoader url={TeamRoute.contentUrl} Component={ImageGrid}></StaticPageLoader>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col sm={12} md={8}>
              <h2 className="my-5">Lokales Organisationskomitee</h2>
            </Col>
          </Row>
          <Row>
            <StaticPageLoader url={TeamRoute.contentUrl} Component={ImageGrid}></StaticPageLoader>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default KomiteeAndTeam
