import { useLayoutEffect } from 'react'
import { useOnScreen } from '../../../hooks/viewport'
import { CalendarDays, MapPin } from 'lucide-react'
// import { useMenuStore } from '../../../store'
import { useLocation } from 'react-router-dom'
import ButtonDhd from '../../ui/ButtonDhd'
import './Keynotes.scss'

const { Container, Row, Col } = require('react-bootstrap')

// const ClosingKeynote = ({ data }) => {
//   console.debug('[Keynote] srcset', data)
// }

const ClosingKeynote = ({ data }) => {
  // const setCurrentStepIndex = useMenuStore((state) => state.setCurrentStepIndex)
  const location = useLocation()
  const [{ isIntersecting = false } = {}, ref] = useOnScreen()
  useLayoutEffect(() => {
    console.debug('[ClosingKeynote] isIntersecting:', isIntersecting)
    //   if (isIntersecting) {
    //     setCurrentStepIndex(6)
    //   } else {
    //     if (location.pathname !== '/') {
    //       setCurrentStepIndex(0)
    //     }
    //   }
  }, [isIntersecting])

  if (!data) {
    return null
  }

  const SrcSetRegexp = new RegExp('srcset="([^"]+)"', 'i')

  const title = data[1].title?.rendered
  const content = String(data[1].content?.rendered)
  const excerpt = String(data[1].excerpt?.rendered)
  const srcset = content.match(SrcSetRegexp)
  const removeHtml = content.replace(/<[^>]*>?/gm, '')
  const splitter = removeHtml.split('\n')
  // const textBlockGroupper = splitter.slice(4, 7)

  // console.debug('[Keynote] content', content)

  return (
    <section className="keynote closing flex-center" ref={ref}>
      <div className="flex-grow-1">
        <Container>
          <Row className="mb-4">
            <Col
              lg={{ order: 0, span: 6 }}
              md={{ order: 1 }}
              className="align-self-start ImageGrid"
            >
              <figure>
                <img alt={splitter[1]} srcSet={srcset[1]} />
                <figcaption className="figcaption">
                  <h4 className="d-flex justify-content-end mb-3">{splitter[1]}</h4>
                </figcaption>
              </figure>
            </Col>
            <Col
              lg={{ order: 1, span: 6 }}
              md={{ order: 0 }}
              className="align-self-start text-right"
            >
              <h2>{title}</h2>
              <h3 className="my-5">{splitter[6]}</h3>
              <div className="when-and-where d-flex my-4">
                <data className="data me-4">
                  <i className="me-2">
                    <CalendarDays />
                  </i>
                  {splitter[4]}
                </data>

                <div className="place">
                  <i className="me-2">
                    <MapPin />
                  </i>
                  {splitter[5]}
                </div>
              </div>
            </Col>
          </Row>
          {location.pathname === '/' ? (
            <Row>
              <Col className="col-12 col-lg-9 mt-4 align-self-start">
                <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
              </Col>
            </Row>
          ) : null}
          {location.pathname === 'keynotes' ? (
            <Row>
              <Col className="col-12 col-lg-6 align-self-start">
                <h4 className="my-4">
                  <b>{splitter[7]}</b>
                </h4>
                <p>{splitter[8]}</p>
                <h4 className="my-4">
                  <b>{splitter[9]}</b>
                </h4>
                <p>{splitter[10]}</p>
              </Col>
              <Col className="col-12 col-lg-6 mt-4 align-self-start">
                <p>{splitter[11]}</p>
                <p>{splitter[12]}</p>
                <p>{splitter[13]}</p>
              </Col>
            </Row>
          ) : null}
          <ButtonDhd className={'mt-4'} variant={'primary'} title={'Read More'} icon={true} />
        </Container>
      </div>
    </section>
  )
}

export default ClosingKeynote
