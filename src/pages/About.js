import ImageGrid from '../components/sections/team/ImageGrid.js'
import { Col, Container, Row } from 'react-bootstrap'
import { TeamRoute } from '../constants.js'
import StaticPageLoader from '../components/StaticPageLoader.js'
import './Page.scss'

import ButtonDhd from '../components/ui/ButtonDhd.js'

const About = ({ data }) => {
  // console.log('[XXXXXXXXXX]', data)
  if (!data) {
    return null
  }

  const SrcSetRegexp = new RegExp('(?<=<h2>)(.*?)(?=</h2>)', 'i')
  const title = data.title?.rendered
  // const content = data.content?.rendered
  // const hTwoExtracter = content.match(SrcSetRegexp)

  return (
    <div className="KomiteeAndTeam">
      <section className="genric-page-intro d-flex">
        <Container>
          <Row>
            <Col className="col col-sm-12 col-md-9 col-lg-7">
              <h1>{title}</h1>
              <h4 className="my-3">Get inspired by our amazing speakers on 14 nov</h4>
            </Col>
            <div className="d-flex">
              <ButtonDhd
                className={'mt-0 mt-sm-4 download'}
                variant={'primary'}
                title={'Das CfP als .pdf'}
                icon={true}
              />
            </div>
          </Row>
        </Container>
      </section>
      <section>
        <h2 className="my-5">Programmkomitee</h2>

        <StaticPageLoader url={TeamRoute.contentUrl} Component={ImageGrid}></StaticPageLoader>
      </section>
    </div>
  )
}

export default About
