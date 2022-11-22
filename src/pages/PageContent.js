import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ButtonDhd from '../components/ui/ButtonDhd.js'
import Collapse from 'react-bootstrap/Collapse'
import './Page.scss'

const PageContent = ({ data }) => {
  const [open, setOpen] = useState(false)
  console.log('ZZZOPNE', open)
  if (!data) {
    return null
  }

  const SrcSetRegexp = new RegExp('(?<=<h2>)(.*?)(?=</h2>)', 'i')
  const title = data.title?.rendered
  const content = data.content?.rendered
  const hTwoExtracter = content.match(SrcSetRegexp)

  return (
    <div>
      <section className="genric-page-ntro d-flex">
        <Container>
          <Row>
            <Col className="col col-sm-12 col-md-9 col-lg-7">
              <h1>{title}</h1>
              <h4 className="my-3">{hTwoExtracter}</h4>
            </Col>
            <div className="d-flex">
              <ButtonDhd
                className={'mt-0 mt-sm-4 download'}
                variant={'primary'}
                title={'Das CfP als .pdf'}
                icon={true}
              />
              <ButtonDhd
                className={'mt-0 mx-3 mt-sm-4'}
                variant={'secondary'}
                title={'Guidelines'}
                icon={false}
              />
            </div>
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <Col className="col">
            <Collapse in={open}>
              <section dangerouslySetInnerHTML={{ __html: content }}></section>
            </Collapse>
            <ButtonDhd
              onClick={() => setOpen(!open)}
              ariaControls="example-collapse-text"
              ariaExpanded={open}
              className={'mt-0 mx-3 mt-sm-4'}
              variant={'secondary'}
              title={'Guidelines'}
              icon={false}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PageContent
