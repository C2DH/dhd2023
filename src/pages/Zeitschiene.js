import { Col, Container, Row } from 'react-bootstrap'
import ClosingKeynote from '../components/sections/keynotes/ClosingKeynote'
import './Page.scss'
import ButtonDhd from '../components/ui/ButtonDhd.js'
import StaticPageLoader from '../components/StaticPageLoader'
import { KeynoteRoute } from '../constants'
import { ArrowRight } from 'lucide-react'

const Zeitschiene = ({ data }) => {
  // console.log('[XXXXXXXXXX]', data)
  if (!data) {
    return <div className="Zeitschiene" />
  }

  const title = data.title?.rendered
  const content = String(data.content?.rendered)
  // const removeHtml = content.replace(/<[^>]*>?/gm, '')
  // const splitter = removeHtml.split('\n')

  return (
    <div className="Zeitschiene">
      <section className="genric-page-intro d-flex">
        <Container>
          <Row>
            <Col className="col col-sm-12 col-md-9 col-lg-7">
              <h1>{title}</h1>
              {/* <h4 className="my-3"></h4> */}
            </Col>
            <div className="d-flex">
              <ButtonDhd
                className={'mt-0 mt-sm-4 download'}
                variant={'primary'}
                title={'View schedule'}
                // iconType={ArrowRight}
              />
            </div>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col className="col col-sm-12 col-md-9 col-lg-7">
              <section dangerouslySetInnerHTML={{ __html: content }}></section>
            </Col>
          </Row>
        </Container>
      </section>
      <StaticPageLoader url={KeynoteRoute.contentUrl} Component={ClosingKeynote}></StaticPageLoader>
    </div>
  )
}

export default Zeitschiene
