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
      <section className="d-flex mt-30">
        <Container>
          <Row>
            <Col xs={12} md={{ span: 8 }}>
              <h1 dangerouslySetInnerHTML={{ __html: title }} className="mb-5"></h1>
              <h3>
                <a
                  href="https://www.conftool.net/dhd2023/index.php?page=participate"
                  target="_blank"
                  rel="noreferrer"
                >
                  HIER KÖNNEN SIE SICH FÜR DIE DHD2023 REGISTRIEREN
                </a>
              </h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={{ span: 8 }}>
              <h4 className="mt-5">
                <b>Gebühren</b>
              </h4>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={{ span: 12 }} xxl={{ span: 4 }}>
              <h5 className="mt-2">Early Bird on site (bis 31.01.2023)</h5>
            </Col>
            <Col xs={{ span: 6 }} md={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 2 }}>
              <div className="price mb-4">
                <span>105,00 €</span>
                <span>Mitglieder, regulär</span>
              </div>
            </Col>
            <Col xs={{ span: 6 }} md={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 2 }}>
              <div className="price mb-4">
                <span>45,00 €</span>
                <span>Mitglieder, ermäßigt</span>
              </div>
            </Col>
            <Col xs={{ span: 6 }} md={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 2 }}>
              <div className="price mb-4">
                <span>175,00 €</span>
                <span>Nicht-Mitglied, regulär</span>
              </div>
            </Col>
            <Col xs={{ span: 6 }} md={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 2 }}>
              <div className="price mb-4">
                <span>85,00 €</span>
                <span>Nicht-Mitglied, ermäßigt</span>
              </div>
            </Col>
            <Col lg={{ span: 12 }}>
              <hr></hr>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={{ span: 12 }} xxl={{ span: 4 }}>
              <h5>Standard on site</h5>
            </Col>
            <Col xs={{ span: 6 }} md={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 2 }}>
              <div className="price mb-4">
                <span>135,00 €</span>
                <span>Mitglieder, regulär</span>
              </div>
            </Col>
            <Col xs={{ span: 6 }} md={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 2 }}>
              <div className="price mb-4">
                <span>65,00 €</span>
                <span>Mitglieder, ermäßigt</span>
              </div>
            </Col>
            <Col xs={{ span: 6 }} md={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 2 }}>
              <div className="price mb-4">
                <span>205,00 €</span>
                <span>Nicht-Mitglied, regulär</span>
              </div>
            </Col>
            <Col xs={{ span: 6 }} md={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 2 }}>
              <div className="price mb-4">
                <span>105,00 €</span>
                <span>Nicht-Mitglied, ermäßigt</span>
              </div>
            </Col>
            <Col lg={{ span: 12 }}>
              <hr></hr>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={{ span: 12 }} xxl={{ span: 4 }}>
              <h5>Online</h5>
            </Col>
            <Col xs={{ span: 6 }} md={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 2 }}>
              <div className="price mb-4">
                <span>50,00 €</span>
                <span>Mitglieder, regulär</span>
              </div>
            </Col>
            <Col xs={{ span: 6 }} md={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 2 }}>
              <div className="price mb-4">
                <span>20,00 €</span>
                <span>Mitglieder, ermäßigt</span>
              </div>
            </Col>
            <Col xs={{ span: 6 }} md={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 2 }}>
              <div className="price mb-4">
                <span>120,00 €</span>
                <span>Nicht-Mitglied, regulär</span>
              </div>
            </Col>
            <Col xs={{ span: 6 }} md={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 2 }}>
              <div className="price mb-4">
                <span>30,00 €</span>
                <span>Nicht-Mitglied, ermäßigt</span>
              </div>
            </Col>
            <Col lg={{ span: 12 }}>
              <hr></hr>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={{ span: 12 }} xxl={{ span: 4 }}>
              <h5>Online late bird (27. 02. bis 03.03.)</h5>
            </Col>
            <Col xs={{ span: 6 }} md={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 2 }}>
              <div className="price mb-4">
                <span>85,00 €</span>
                <span>Mitglieder, regulär</span>
              </div>
            </Col>
            <Col xs={{ span: 6 }} md={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 2 }}>
              <div className="price mb-4">
                <span>30,00 €</span>
                <span>Mitglieder, ermäßigt</span>
              </div>
            </Col>
            <Col xs={{ span: 6 }} md={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 2 }}>
              <div className="price mb-4">
                <span>150,00 €</span>
                <span>Nicht-Mitglied, regulär</span>
              </div>
            </Col>
            <Col xs={{ span: 6 }} md={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 2 }}>
              <div className="price mb-4">
                <span>50,00 €</span>
                <span>Nicht-Mitglied, ermäßigt</span>
              </div>
            </Col>
            <Col lg={{ span: 12 }}>
              <hr></hr>
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
        {/* <Container>
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
        </Container> */}
      </section>
    </div>
  )
}

export default Register
