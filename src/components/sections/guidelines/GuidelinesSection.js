import { Container, Row, Col } from 'react-bootstrap'
import ButtonDhd from '../../ui/ButtonDhd.js'
import './GuidelinesSection.scss'

const GuidelinesSection = ({ data }) => {
  if (!data) {
    return null
  }

  const SrcSetRegexp = new RegExp('(?<=<strong>)(.*?)(?=</strong>)', 'i')
  const title = data.title?.rendered
  const content = data.content?.rendered
  const hTwoExtracter = content.match(SrcSetRegexp)

  console.log('DATA', data)

  return (
    <div>
      <section className="d-flex mt-30">
        <Container id="guidelines-section" className="my-5 h-100">
          <Row>
            <Col className="col col-sm-12 col-md-9 col-lg-7">
              <h1>{title}</h1>
              <h4 className="my-3">{hTwoExtracter}</h4>
            </Col>
            <div className="d-flex">
              <ButtonDhd
                className={'mt-0 mt-sm-4 download'}
                variant={'primary'}
                title={'Zitierregeln Deutsch'}
                // iconType={ArrowRight}
              />
              <ButtonDhd
                className={'mt-0 mx-3 mt-sm-4 download'}
                variant={'primary'}
                title={'Citation Rules English'}
                // iconType={ArrowRight}
              />
            </div>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default GuidelinesSection
