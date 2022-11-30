import { useLayoutEffect } from 'react'
import { useOnScreen } from '../../../hooks/viewport'
// import { useMenuStore } from '../../../store'
// import { useLocation } from 'react-router-dom'
import './Keynotes.scss'

const { Container, Row, Col } = require('react-bootstrap')

const ClosingKeynote = ({ data }) => {
  // const setCurrentStepIndex = useMenuStore((state) => state.setCurrentStepIndex)
  // const location = useLocation()
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

  const title = data.title?.rendered
  const content = String(data.content?.rendered)
  const srcset = content.match(SrcSetRegexp)
  const removeHtml = content.replace(/<[^>]*>?/gm, '')
  const splitter = removeHtml.split('\n')
  // const textBlockGroupper = splitter.slice(4, 7)

  console.debug('[Keynote] srcset', splitter)

  return (
    <section className="keynote h-100 flex-center" ref={ref}>
      <div className="flex-grow-1">
        <Container>
          <Row className="mb-4">
            <Col className="col-12 col-lg-6 align-self-start">
              <h2>{title}</h2>
              <h3 className="my-5">{splitter[0]}</h3>
            </Col>
            <Col className="col-12 col-lg-6 align-self-start">
              <img alt="" srcSet={srcset[1]} />
            </Col>
          </Row>
          <Row>
            <Col className="col-12 col-lg-6 align-self-start">
              <h4 className="my-4">{splitter[1]}</h4>
              <p>{splitter[2]}</p>
              <h4 className="my-4">{splitter[3]}</h4>
              <p>{splitter[4]}</p>
            </Col>
            <Col className="col-12 col-lg-6 mt-4 align-self-start">
              <p>{splitter[5]}</p>
              <p>{splitter[6]}</p>
              <p>{splitter[7]}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default ClosingKeynote
