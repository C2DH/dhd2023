import React, { useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ButtonDhd from '../components/ui/ButtonDhd.js'
// import Collapse from 'react-bootstrap/Collapse'
import { useSpring, animated, config } from 'react-spring'
import useMeasure from 'react-use-measure'
import { GuidelinesRoute } from '../constants.js'
import StaticPageLoader from '../components/StaticPageLoader.js'
import GuidelinesSection from '../components/sections/guidelines/GuidelinesSection.js'
import { useCurrentWindowDimensions } from '../hooks/viewport.js'
import './Page.scss'
import { Helmet } from 'react-helmet'

const CfpPage = ({ data }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  // const { height } = useCurrentWindowDimensions(isMobile)

  const [ref, bounds] = useMeasure()

  const slideInStyles = useSpring({
    config: { ...config.slow },
    from: { height: 800 },
    to: {
      // opacity: isCollapsed ? 1 : 0,
      height: isCollapsed ? bounds.height : 800,
    },
  })

  const togglePanel = () => {
    setIsCollapsed((prevState) => !prevState)
  }

  if (!data) {
    return null
  }

  const SrcSetRegexp = new RegExp('(?<=<h2>)(.*?)(?=</h2>)', 'i')
  const title = data.title?.rendered
  const content = data.content?.rendered
  // const excerpt = String(data.excerpt?.rendered)
  const hTwoExtracter = content.match(SrcSetRegexp)
  console.log('ZZZOPNE', data)
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
              <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
              <h4 dangerouslySetInnerHTML={{ __html: hTwoExtracter }}></h4>
            </Col>
            <div className="d-flex flex-wrap">
              <ButtonDhd
                href={'/doc/CfP_DHd2023.pdf'}
                className={'mt-0 me-3 mt-sm-4'}
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
          <Col className="col">
            {/* <section dangerouslySetInnerHTML={{ __html: excerpt }}></section> */}
            {/* className={`contentToggle ${showContent === true ? 'open' : 'close'}`} */}
            <animated.div style={{ ...slideInStyles, overflow: 'hidden' }}>
              <section ref={ref} dangerouslySetInnerHTML={{ __html: content }}></section>
            </animated.div>
            <ButtonDhd
              onClick={togglePanel}
              // ariaControls="example-collapse-text"
              // ariaExpanded={open}
              className={'mt-0 mt-sm-4'}
              variant={'secondary'}
              title={'Show more'}
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
