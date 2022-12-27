import { Col, Container, Row } from 'react-bootstrap'
import './Page.scss'
import ButtonDhd from '../components/ui/ButtonDhd'
import PageMune from '../components/pageMenu/PageMenu'
import { useState, useMemo } from 'react'
import { dataLocationMenu } from '../Data.js'

const Location = ({ data }) => {
  const [displayDay, setDisplayDay] = useState(0)
  const onChangeDayHandler = (index) => {
    setDisplayDay(index)
  }
  const title = data ? data.title.rendered : ''
  const content = data ? String(data.content.rendered) : ''
  const splitterHTML = useMemo(() => content.split('<pre>Split content</pre>'), [content])

  if (!data) {
    return <div className="Location" />
  }

  console.log('[LOCATION]', splitterHTML)
  return (
    <div className="Location mt-30">
      <PageMune menuData={dataLocationMenu} onChange={onChangeDayHandler} displayDay={displayDay} />
      <section>
        <Container>
          <Row>
            <Col
              md={{ span: 12, offset: 0 }}
              lg={{ span: 10, offset: 2 }}
              xl={{ span: 10, offset: 1 }}
            >
              <h1 className="mb-5" dangerouslySetInnerHTML={{ __html: title }}></h1>
              <ButtonDhd
                href={'/doc/location_eng_de.pdf'}
                download={'download'}
                className={'mt-0 me-3'}
                variant={'primary'}
                title={'Location PDF'}
                iconType={'FileDown'}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="d-flex programm-content ">
        <Container className="mb-15 mt-5">
          <Row>
            <Col
              md={{ span: 12, offset: 0 }}
              lg={{ span: 10, offset: 2 }}
              xl={{ span: 10, offset: 1 }}
            >
              <PageMune
                menuData={dataLocationMenu}
                onChange={onChangeDayHandler}
                displayDay={displayDay}
              />
              <div
                className={displayDay === 0 ? 'de-ver mb-5' : 'eng-ver mb-5'}
                dangerouslySetInnerHTML={{ __html: splitterHTML[displayDay] }}
              ></div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Location
