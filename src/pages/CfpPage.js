import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ButtonDhd from '../components/ui/ButtonDhd.js'
import Collapse from 'react-bootstrap/Collapse'
import { GuidelinesRoute } from '../constants.js'
import StaticPageLoader from '../components/StaticPageLoader.js'
import GuidelinesSection from '../components/sections/guidelines/GuidelinesSection.js'
import './Page.scss'
import { ArrowRight } from 'lucide-react'

const CfpPage = ({ data }) => {
  const [open, setOpen] = useState(false)

  if (!data) {
    return null
  }

  const SrcSetRegexp = new RegExp('(?<=<h2>)(.*?)(?=</h2>)', 'i')
  const title = data.title?.rendered
  const content = data.content?.rendered
  const hTwoExtracter = content.match(SrcSetRegexp)
  console.log('ZZZOPNE', data)
  return (
    <div>
      <section className="genric-page-intro d-flex">
        <Container>
          <Row>
            <Col className="col col-sm-12 col-md-9 col-lg-7">
              <h1>{title}</h1>
              <h4 className="my-3">{hTwoExtracter}</h4>
            </Col>
            <div className="d-flex">
              <ButtonDhd
                className={'mt-0 mt-sm-4'}
                variant={'primary'}
                title={'Das CfP als .pdf'}
                iconType={'FileDown'}
              />
              <ButtonDhd
                className={'mt-0 mx-3 mt-sm-4'}
                variant={'secondary'}
                title={'Guidelines'}
                iconType={'ArrowDown'}
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
              title={'Show more'}
              iconType={'Plus'}
            />
          </Col>
        </Row>
      </Container>
      <StaticPageLoader url={GuidelinesRoute.contentUrl} Component={GuidelinesSection} />
    </div>
  )
}

export default CfpPage
