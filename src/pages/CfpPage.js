import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ButtonDhd from '../components/ui/ButtonDhd.js'
// import Collapse from 'react-bootstrap/Collapse'
import { useSpring, animated, config } from 'react-spring'
import { GuidelinesRoute } from '../constants.js'
import StaticPageLoader from '../components/StaticPageLoader.js'
import GuidelinesSection from '../components/sections/guidelines/GuidelinesSection.js'
import { useBoundingClientRect } from '../hooks/viewport.js'
import './Page.scss'
import { Helmet } from 'react-helmet'

const CfpPage = ({ data }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const [bbox, ref] = useBoundingClientRect()

  const slideInStyles = useSpring({
    config: { ...config.slow },
    from: { height: 800 },
    to: {
      // opacity: isCollapsed ? 1 : 0,
      height: isCollapsed ? bbox.height + 100 : 800,
    },
  })

  const togglePanel = () => {
    setIsCollapsed((prevState) => !prevState)
  }

  if (!data) {
    return <div className="CfpPage" />
  }

  const title = data ? data.title.rendered : ''
  const content = data ? String(data.content.rendered) : ''

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={`${title} - DHd2023 Conference - Luxemburg / Trier`} />
      </Helmet>
      <section className="genric-page-intro d-flex">
        <Container>
          <Row>
            <Col className="col col-sm-12 col-md-9 col-lg-7">
              <h1 className="mb-3" dangerouslySetInnerHTML={{ __html: title }}></h1>
              {/* <h4 dangerouslySetInnerHTML={{ __html: hTwoExtracter[0] }}></h4> */}
            </Col>
            <div className="d-flex flex-wrap">
              <ButtonDhd
                href={'/doc/CfP_DHd2023.pdf'}
                className={'mt-0 me-sm-3 me-xs-0 mt-sm-4'}
                variant={'primary'}
                title={'Das CfP als .pdf'}
                iconType={'FileDown'}
              />
              <ButtonDhd
                className={'mt-3 mt-sm-4'}
                variant={'secondary'}
                title={'Guidelines'}
                iconType={'ArrowDown'}
                to="/page/cfp#guidelines"
              />
            </div>
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <Col xs={12}>
            <animated.div style={{ ...slideInStyles, overflow: 'hidden' }}>
              <section
                className="CfpPage"
                ref={ref}
                dangerouslySetInnerHTML={{ __html: content }}
              ></section>
            </animated.div>
            <ButtonDhd
              onClick={togglePanel}
              // ariaControls="example-collapse-text"
              // ariaExpanded={open}
              className={'mt-4'}
              variant={'secondary'}
              title={isCollapsed === true ? 'Weniger anzeigen' : 'Mehr anzeigen'}
              iconType={isCollapsed === true ? 'Minus' : 'Plus'}
            />
          </Col>
        </Row>
      </Container>
      <StaticPageLoader url={GuidelinesRoute.contentUrl} Component={GuidelinesSection} />
    </div>
  )
}

export default CfpPage
