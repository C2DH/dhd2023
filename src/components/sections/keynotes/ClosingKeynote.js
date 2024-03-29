import { useLayoutEffect } from 'react'
import { useOnScreen } from '../../../hooks/viewport'
import { CalendarDays, MapPin, Twitter } from 'lucide-react'
import { KeynoteRoute } from '../../../constants'
import { useLocation } from 'react-router-dom'
import ButtonDhd from '../../ui/ButtonDhd'
import './Keynotes.scss'

const { Container, Row, Col } = require('react-bootstrap')

const ClosingKeynote = ({ data }) => {
  const location = useLocation()
  const [{ isIntersecting = false } = {}, ref] = useOnScreen()
  useLayoutEffect(() => {}, [isIntersecting])

  if (!data) {
    return null
  }

  const SrcSetRegexp = new RegExp('srcset="([^"]+)"', 'i')

  const title = data[1].title?.rendered
  const content = String(data[1].content?.rendered)
  const excerpt = String(data[1].excerpt?.rendered)
  const srcset = content.match(SrcSetRegexp)
  const link = data[1].acf?.social_link
  const removeHtml = content.replace(/<[^>]*>?/gm, '')
  const splitter = removeHtml.split('\n')

  return (
    <section className="keynote closing flex-center mb-30" ref={ref}>
      <div className="flex-grow-1">
        <Container>
          <Row className="mb-4">
            <Col
              xs={{ span: 12, order: 1 }}
              lg={{ order: 0, span: 6 }}
              className="align-self-start ImageGrid"
            >
              <figure>
                <img alt={splitter[1]} srcSet={srcset[1]} />
                <figcaption className="figcaption">
                  <h4
                    className="d-flex justify-content-end mb-3"
                    dangerouslySetInnerHTML={{ __html: splitter[1] }}
                  ></h4>
                  {link ? (
                    <i>
                      <a href={`${link}`} target="_blank" rel="noreferrer">
                        <Twitter size={24} />
                      </a>
                    </i>
                  ) : null}
                </figcaption>
              </figure>
            </Col>
            <Col className="align-self-start text-right">
              <h2>{title}</h2>
              <h3 className="my-5" dangerouslySetInnerHTML={{ __html: splitter[6] }}></h3>
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
          {location.pathname === '/' || location.pathname === '/contact' ? (
            <>
              <Row>
                <Col className="col-12 col-lg-9 mt-4 align-self-start">
                  <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                </Col>
              </Row>
              <ButtonDhd
                className={'mt-4'}
                variant={'primary'}
                title={'Weiterlesen'}
                iconType={'ArrowRight'}
                to={KeynoteRoute.to}
              />
            </>
          ) : null}
          {location.pathname === '/page/keynotes' ? (
            <>
              <Row>
                <Col className="col-12 col-lg-10 align-self-start">
                  <h4 className="my-4">
                    <b dangerouslySetInnerHTML={{ __html: splitter[7] }}></b>
                  </h4>
                  <p dangerouslySetInnerHTML={{ __html: splitter[8] }}></p>
                </Col>
              </Row>
              <Row>
                <Col className="col-12 col-lg-6 align-self-start">
                  <h4 className="my-4">
                    <b dangerouslySetInnerHTML={{ __html: splitter[9] }}></b>
                  </h4>
                  <p dangerouslySetInnerHTML={{ __html: splitter[(10, 11)] }}></p>
                  <p dangerouslySetInnerHTML={{ __html: splitter[12] }}></p>
                </Col>
                <Col className="col-12 col-lg-6 mt-4 align-self-start pt-xs-0 pt-lg-5">
                  <p dangerouslySetInnerHTML={{ __html: splitter[13] }}></p>
                </Col>
              </Row>
            </>
          ) : null}
        </Container>
      </div>
    </section>
  )
}

export default ClosingKeynote
