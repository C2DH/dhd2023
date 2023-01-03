import { useLayoutEffect } from 'react'
import { useOnScreen } from '../../../hooks/viewport'
import { useMenuStore } from '../../../store'
import MenuFooter from '../../menu/MenuFooter'
import { useLocation } from 'react-router-dom'
import ButtonDhd from '../../ui/ButtonDhd.js'
import { LocationRoute } from '../../../constants'
import GoUpButton from '../../ui/GoUpButton'
import './Footer.scss'

const { Container, Row, Col } = require('react-bootstrap')

const Footer = () => {
  const setCurrentStepIndex = useMenuStore((state) => state.setCurrentStepIndex)
  const { pathname } = useLocation()

  const [{ isIntersecting = false } = {}, ref] = useOnScreen()
  useLayoutEffect(() => {
    console.debug('[Footer] isIntersecting:', isIntersecting)

    if (ref.current && isIntersecting) {
      setCurrentStepIndex(5)
    } else {
      if (pathname !== '/') {
        setCurrentStepIndex(0)
      }
    }
    // eslint-disable-next-line
  }, [isIntersecting, pathname])
  return (
    <footer id="section-contact" className="footer flex-center">
      <div className="footer-content-wrapper flex-grow-1 d-flex align-item-center" ref={ref}>
        <Container className="contact mb-30">
          <Row>
            <Col sm={12} md={6}>
              <h2>Kontakt</h2>
            </Col>
            <Col sm={12} md={6}>
              <p>
                Bei Fragen, Anregungen oder Wünschen schreiben Sie eine E-Mail an die Lokalen
                Organisatoren in Trier und Luxemburg unter{' '}
                <strong>
                  <a href="mailto:dhd2023@uni-trier.de">dhd2023@uni-trier.de</a>
                </strong>
              </p>
              <ButtonDhd
                className={'mt-0 mt-sm-4'}
                variant={'secondary'}
                title={'Location'}
                iconType={'ArrowRight'}
                to={LocationRoute.to}
              />
            </Col>
          </Row>
        </Container>
        <GoUpButton />
      </div>
      <Container className="mt-4">
        <Row>
          <Col>
            <MenuFooter />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
