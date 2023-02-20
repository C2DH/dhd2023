import { Col, Container, Row } from 'react-bootstrap'
import './Page.scss'
import ButtonDhd from '../components/ui/ButtonDhd'
import { PodcastTeam } from '../constants'
import StaticPageLoader from '../components/StaticPageLoader'
import ImageGrid from '../components/sections/team/ImageGrid'

const RaDiHum20Route = ({ data }) => {
  const title = data ? data.title.rendered : ''
  const content = data ? String(data.content.rendered) : ''

  if (!data) {
    return <div className="RaDiHum20" />
  }

  return (
    <div className="RaDiHum20 mt-30 mb-15">
      <section>
        <Container>
          <Row>
            <Col md={{ span: 12, offset: 0 }} xl={{ span: 10, offset: 1 }}>
              <h1 className="mb-5" dangerouslySetInnerHTML={{ __html: title }}></h1>
              <ButtonDhd
                href={'https://radihum20.de/'}
                traget={'_blank'}
                rel={'noopener noreferrer'}
                download={'download'}
                className={'mt-0 me-3'}
                variant={'primary'}
                title={'Podcast Page'}
                iconType={'ArrowRight'}
              />
            </Col>
          </Row>
        </Container>
        <Container className="mt-15">
          <StaticPageLoader
            url={PodcastTeam.contentUrl}
            options={{ params: { per_page: 4 } }}
            Component={ImageGrid}
          ></StaticPageLoader>
        </Container>
      </section>

      <section className="mt-5">
        <Container>
          <Row>
            <Col md={{ span: 12, offset: 0 }} xl={{ span: 10, offset: 1 }}>
              <div className="mb-5" dangerouslySetInnerHTML={{ __html: content }}></div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section className="d-flex programm-content ">
        <Container className="mb-15 mt-5">
          <Row>
            <Col
              md={{ span: 12, offset: 0 }}
              lg={{ span: 10, offset: 2 }}
              xl={{ span: 10, offset: 1 }}
            >
              <PageMune
                menuData={dataLocationMenu}
                onChange={onChangeDayHandler}
                displayDay={displayDay}
              />
              <div
                className={displayDay === 1 ? 'de-ver mb-5' : 'eng-ver mb-5'}
                dangerouslySetInnerHTML={{ __html: splitterHTML[displayDay] }}
              ></div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </div>
  )
}

export default RaDiHum20Route
