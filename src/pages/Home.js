import React, { useEffect } from 'react'
import { useMenuStore } from '../store'
import { useLocation } from 'react-router-dom'
import { Scrollama, Step } from 'react-scrollama'

import IntroHomePage from '../components/sections/intro/IntroHomePage.js'
import Keynotes from '../components/sections/keynotes/Keynotes.js'
import TeamSection from '../components/sections/team/TeamSection.js'
import ConferenceHighlights from '../components/sections/conferenceHighlights/ConferenceHighlights.js'
import Sponsors from '../components/sections/sponsors/Sponsors.js'
import StaticPageLoader from '../components/StaticPageLoader'
import { KeynoteRoute } from '../constants'

const AvailableSteps = [
  'intro section',
  'keynotes',
  'team section',
  'conference highlights section',
  'sponsors',
]

const Home = ({ hideWhenPathIs = [], availableWidth, availableHeight }) => {
  const currentStepIndex = useMenuStore((state) => state.currentStepIndex)
  const setCurrentStepIndex = useMenuStore((state) => state.setCurrentStepIndex)
  const { pathname } = useLocation()
  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data)
  }

  //Scroll to section
  useEffect(() => {
    console.debug('[Home] @useEffect location.pathname:', pathname)
    if (pathname === '/team') {
      const el = document.getElementById('section-team')
      if (el) {
        el.scrollIntoView()
      } else {
        console.debug('[Home] noooooooooo')
      }
      // document.elementFromPoint. section-team
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])
  return (
    <div className="Home">
      <div>
        <Scrollama offset={0.5} onStepEnter={onStepEnter}>
          {AvailableSteps.map((text, stepIndex) => (
            <Step data={stepIndex} key={stepIndex}>
              <section
                className="step-index-section"
                style={{
                  display: 'flex',
                  margin: text === 'intro section' ? '0 0 50vh' : '50vh 0',
                  // borderTop: "4px solid gray",
                  // borderBottom: "4px solid red",
                  height: text === 'intro section' ? availableHeight : 'auto',
                  // transition: 'opacity .5s ease-in-out',
                  opacity: currentStepIndex === stepIndex ? 1 : 0,
                  // transform: currentStepIndex === stepIndex ? 'translateX(0%)' : 'translateX(80%)',
                  justifyContent: 'center',
                  transition: 'all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
                }}
              >
                {text === 'intro section' && <IntroHomePage></IntroHomePage>}
                {text === 'keynotes' && (
                  <StaticPageLoader
                    url={KeynoteRoute.contentUrl}
                    Component={Keynotes}
                  ></StaticPageLoader>
                )}
                {text === 'team section' && <TeamSection></TeamSection>}
                {text === 'conference highlights section' && (
                  <ConferenceHighlights></ConferenceHighlights>
                )}
                {text === 'sponsors' && <Sponsors></Sponsors>}
              </section>
            </Step>
          ))}
        </Scrollama>
      </div>
    </div>
  )
}

export default Home
