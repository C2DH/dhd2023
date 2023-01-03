import { Col, Container, Row } from 'react-bootstrap'
import './Page.scss'
import ButtonDhd from '../components/ui/ButtonDhd'
import { ProgrammubersichtRoute } from '../constants'

const Register = ({ data }) => {
  if (!data) {
    return <div className="Register" />
  }

  const title = data ? data.title.rendered : ''
  const content = data ? String(data.content.rendered) : ''

  return (
    <div className="Register">
      <section className="genric-page-intro d-flex">
        <Container>
          <Row>
            <Col sx={12} md={{ span: 8 }}>
              <h1 dangerouslySetInnerHTML={{ __html: title }} className="mb-5"></h1>
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
              <ButtonDhd
                to={ProgrammubersichtRoute.to}
                className={'mt-4'}
                variant={'primary'}
                title={'Programmubersicht'}
                iconType={'ArrowRight'}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Register
