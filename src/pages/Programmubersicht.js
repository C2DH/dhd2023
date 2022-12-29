import { Col, Container, Row } from 'react-bootstrap'
import './Page.scss'
import PageMune from '../components/pageMenu/PageMenu'
import ButtonDhd from '../components/ui/ButtonDhd'
import { useState, useMemo } from 'react'
import { dataPageMenu } from '../Data'

const Programmubersicht = ({ data }) => {
  const [displayDay, setDisplayDay] = useState(1)
  const onChangeDayHandler = (index) => {
    setDisplayDay(index)
  }

  const title = data ? data.title.rendered : ''
  const content = data ? String(data.content.rendered) : ''
  const splitterHTML = useMemo(() => content.split('<pre>Split days</pre>'), [content])

  if (!data) {
    return <div className="Programmubersicht" />
  }

  return (
    <div className="Programmubersicht mt-30">
      <PageMune menuData={dataPageMenu} onChange={onChangeDayHandler} displayDay={displayDay} />
      <section>
        <Container>
          <Row>
            <Col
              md={{ span: 12, offset: 0 }}
              lg={{ span: 10, offset: 2 }}
              xl={{ span: 10, offset: 1 }}
            >
              <h1 dangerouslySetInnerHTML={{ __html: title }} className="mb-5"></h1>
              <h3 dangerouslySetInnerHTML={{ __html: splitterHTML[0] }} className="mb-5"></h3>
              <div className="d-flex flex-wrap">
                <ButtonDhd
                  href={'/doc/browseSessions.pdf'}
                  className={'me-sm-3 me-xs-0'}
                  variant={'primary'}
                  title={'Download pdf'}
                  iconType={'FileDown'}
                />
                <ButtonDhd
                  href={'https://www.conftool.net/dhd2023/'}
                  traget={'_blank'}
                  rel={'noopener noreferrer'}
                  className={'mt-sm-4 mt-md-0'}
                  variant={'secondary'}
                  title={'Anmeldung Conftool'}
                  iconType={'ArrowRight'}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="programm-content mt-5 mb-30">
        <Container>
          <Row>
            <PageMune
              menuData={dataPageMenu}
              onChange={onChangeDayHandler}
              displayDay={displayDay}
            />
          </Row>

          <Row>
            <Col
              md={{ span: 12, offset: 0 }}
              lg={{ span: 10, offset: 2 }}
              xl={{ span: 10, offset: 1 }}
            >
              <section dangerouslySetInnerHTML={{ __html: splitterHTML[displayDay] }}></section>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Programmubersicht
