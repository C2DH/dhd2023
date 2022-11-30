import { useLayoutEffect } from 'react'
import { useOnScreen } from '../../../hooks/viewport'
import { useMenuStore } from '../../../store'
import MenuFooter from '../../menu/MenuFooter'
import { useLocation } from 'react-router-dom'
import './Footer.scss'

const { Container, Row, Col } = require('react-bootstrap')

const Footer = ({ availableWidth, availableHeight }) => {
  const setCurrentStepIndex = useMenuStore((state) => state.setCurrentStepIndex)
  const location = useLocation()

  const [{ isIntersecting = false } = {}, ref] = useOnScreen()
  useLayoutEffect(() => {
    console.debug('[Footer] isIntersecting:', isIntersecting)

    if (ref.current && isIntersecting) {
      setCurrentStepIndex(5)
    } else {
      if (location.pathname !== '/') {
        setCurrentStepIndex(0)
      }
    }
  }, [isIntersecting])
  return (
    <footer className="footer flex-center">
      <div className="footer-content-wrapper flex-grow-1" ref={ref}>
        <Container>
          <Row>
            <Col className=" col-7 align-self-start">
              <h2>
                A unique experience of inspiration, meeting and networking for the ANY WORD industry
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="my-4">
        <Row>
          <Col className="col">
            <MenuFooter />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer