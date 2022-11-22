import { useLayoutEffect } from 'react'
import { useOnScreen } from '../../hooks/viewport'
import { useMenuStore } from '../../store'
import MenuFooter from '../menu/MenuFooter'

const { Container, Row, Col } = require('react-bootstrap')

const Footer = ({ availableWidth, availableHeight }) => {
  const setCurrentStepIndex = useMenuStore((state) => state.setCurrentStepIndex)
  const [{ isIntersecting = false } = {}, ref] = useOnScreen()
  useLayoutEffect(() => {
    console.debug('[Footer] isIntersecting:', isIntersecting)
    if (isIntersecting) {
      setCurrentStepIndex(5)
    }
  }, [isIntersecting])
  return (
    <footer className="footer h-100 flex-center">
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
      <MenuFooter />
    </footer>
  )
}

export default Footer
