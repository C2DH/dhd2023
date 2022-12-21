import { Col, Container, Row } from 'react-bootstrap'
import './Page.scss'
import PageMune from '../components/pageMenu/PageMenu'
import ButtonDhd from '../components/ui/ButtonDhd'
import { useState, useMemo } from 'react'

const Programmubersicht = ({ data }) => {
  const [displayDay, setDisplayDay] = useState(0)
  const onChangeDayHandler = (index) => {
    setDisplayDay(index)
  }
  const title = data ? data.title.rendered : ''

  const content = data ? String(data.content.rendered) : ''
  // const splitterHTML = content.split('<pre>Split days</pre>')
  const splitterHTML = useMemo(() => content.split('<pre>Split days</pre>'), [content])

  console.log('[Programmubersicht]', data)
  if (!data) {
    return <div className="Programmubersicht" />
  }

  return (
    <div className="Programmubersicht mt-30">
      <PageMune onChange={onChangeDayHandler} />
      <section>
        <Container>
          <Row>
            <Col
              md={{ span: 12, offset: 0 }}
              lg={{ span: 10, offset: 2 }}
              xl={{ span: 10, offset: 1 }}
            >
              <h1 dangerouslySetInnerHTML={{ __html: title }} className="mb-5"></h1>
              <div className="d-flex flex-wrap">
                <ButtonDhd
                  href={'/doc/CfP_DHd2023.pdf'}
                  className={'mt-0 mt-sm-4'}
                  variant={'primary'}
                  title={'Download pdf'}
                  iconType={'FileDown'}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="programm-content mt-5">
        <Container>
          <Row>
            <PageMune onChange={onChangeDayHandler} />
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