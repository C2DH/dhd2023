import React from 'react'
import { TeamRoute } from '../../../constants'
import StaticPageLoader from '../../StaticPageLoader'
import ImageGrid from './ImageGrid.js'
import ButtonDhd from '../../ui/ButtonDhd.js'
import { KomiteeAndTeamRoute } from '../../../constants'

const { Container, Row, Col } = require('react-bootstrap')

const TeamSection = () => {
  return (
    <section id="section-team" className="view-conference flex-center">
      <div className="iview-conference-content-wrapper">
        <Container>
          <Row>
            <Col sm={12} md={9} lg={7}>
              <h2>Komitee & Team</h2>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <StaticPageLoader
            url={TeamRoute.contentUrl}
            options={{ params: { per_page: 8 } }}
            Component={ImageGrid}
          ></StaticPageLoader>
        </Container>
        <Container>
          <Row>
            <Col className="align-self-start">
              <ButtonDhd
                to={KomiteeAndTeamRoute.to}
                className={'mt-4'}
                variant={'primary'}
                title={'Alles anzeigen'}
                iconType={'ArrowRight'}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default TeamSection
