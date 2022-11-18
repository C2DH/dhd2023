import React from 'react'
import { TeamRoute } from '../../constants'
import StaticPageLoader from '../StaticPageLoader'
import ImageGrid from '../ui/ImageGrid.js'
import ButtonDhd from '../ui/ButtonDhd.js'

const { Container, Row, Col } = require('react-bootstrap')

const TeamSection = () => {
  return (
    <section id="section-team" className="view-conference flex-center">
      <div className="iview-conference-content-wrapper">
        <Container>
          <Row>
            <Col className=" col-7 align-self-start">
              <h2>
                TEQM A unique experience of inspiration, meeting and networking for the ANY WORD
                industry
              </h2>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <StaticPageLoader url={TeamRoute.contentUrl} Component={ImageGrid}></StaticPageLoader>
        </Container>
        <Container>
          <Row>
            <Col className=" col-7 align-self-start">
              <ButtonDhd
                className={'mt-4'}
                variant={'primary'}
                title={'VIEW CONFERENCE'}
                icon={true}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default TeamSection
