import { Col, Container, Row } from 'react-bootstrap'
import './Page.scss'
import ButtonDhd from '../components/ui/ButtonDhd.js'

const Zeitschiene = ({ data }) => {
  console.log('[XXXXXXXXXX]', data)
  if (!data) {
    return null
  }

  const SrcSetRegexp = new RegExp('(?<=<h2>)(.*?)(?=</h2>)', 'i')
  const title = data.title?.rendered
  const content = data.content?.rendered
  // const hTwoExtracter = content.match(SrcSetRegexp)

  return (
    <div className="Zeitschiene">
      <section className="genric-page-intro d-flex">
        <Container>
          <Row>
            <Col className="col col-sm-12 col-md-9 col-lg-7">
              <h1>{title}</h1>
              <h4 className="my-3">Check the full schedule before we start</h4>
            </Col>
            <div className="d-flex">
              <ButtonDhd
                className={'mt-0 mt-sm-4 download'}
                variant={'primary'}
                title={'View schedule'}
                icon={true}
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
    </div>
  )
}

export default Zeitschiene
