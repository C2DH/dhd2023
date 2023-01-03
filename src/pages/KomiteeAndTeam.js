import { Col, Container, Row } from 'react-bootstrap'
import StaticPageLoader from '../components/StaticPageLoader.js'
import './Page.scss'
import { getApiUrl } from '../utils/api.js'
import Figure, { SrcSetRegexp } from '../components/sections/team/Figure.js'

const SimpleImageGrid = ({ data }) => {
  if (!data) {
    return null
  }
  return (
    <Row className="ImageGrid">
      {data.map((person) => {
        const content = String(person.content?.rendered)
        const srcset = content.match(SrcSetRegexp)
        const title = person.title?.rendered
        const excerpt = person.excerpt?.rendered

        return (
          <Col
            xs={{ span: 12 }}
            sm={{ span: 6 }}
            md={{ span: 6 }}
            lg={{ span: 4 }}
            xxl={{ span: 3 }}
          >
            <Figure key={person.id} srcset={srcset} title={title} excerpt={excerpt} />
          </Col>
        )
      })}
    </Row>
  )
}

const KomiteeAndTeam = ({ data }) => {
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
            <Col sm={12} lg={7}>
              <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
              <h4 className="my-3">
                Kontakt:&nbsp;
                <a href="mailto:dhd2023@uni-trier.de">dhd2023@uni-trier.de</a>
              </h4>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col sm={12} md={8}>
              <h2 className="my-5">Programmkomitee</h2>
            </Col>
          </Row>

          <StaticPageLoader
            url={getApiUrl('/posts?categories=14')}
            options={{ params: { per_page: 50 } }}
            Component={SimpleImageGrid}
          ></StaticPageLoader>
        </Container>
      </section>
      <section className="mb-15 mt-15">
        <Container>
          <Row>
            <Col sm={12} md={8}>
              <h2 className="my-5">Lokales Organisationskomitee</h2>
            </Col>
          </Row>

          <StaticPageLoader
            url={getApiUrl('/posts?categories=13')}
            options={{ params: { per_page: 50 } }}
            Component={SimpleImageGrid}
          ></StaticPageLoader>
        </Container>
      </section>
    </div>
  )
}

export default KomiteeAndTeam
