import React, { useState, useEffect, useLayoutEffect } from 'react'
import ThreeJsBgArch from '../components/ThreeJsBgArch'
import IntroHomePage from '../components/sections/IntroHomePage'
import ViewConfereceHomePage from '../components/sections/ViewConfereceHomePage'
import { Scrollama, Step } from 'react-scrollama'
import Menu from '../components/menu/Menu'
import MenuFixed from '../components/menu/MenuFixed'
import ThirdSection from '../components/sections/ThirdSectionHomePage'
import FourthSection from '../components/sections/FourthSectionHomePage'
import Footer from '../components/sections/Footer'
import { useMenuStore } from '../store'
import { useLocation } from 'react-router-dom'

const AvailableSteps = [
  'first section',
  'second section',
  'third section',
  'fourth section',
  'footer',
]

const Home = ({ hideWhenPathIs = [], availableWidth, availableHeight }) => {
  const currentStepIndex = useMenuStore((state) => state.currentStepIndex)
  const setCurrentStepIndex = useMenuStore((state) => state.setCurrentStepIndex)
  const location = useLocation()
  const isHidden = hideWhenPathIs.includes(location.pathname)
  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data)
  }

  useLayoutEffect(() => {
    console.debug('[Home] @useLayoutEffect location.pathname:', location.pathname)
    if (location.pathname === '/team') {
      const el = document.getElementById('section-team')
      if (el) {
        el.scrollIntoView()
      }
      // document.elementFromPoint. section-team
    }
  }, [location.pathname])
  return (
    <div
      className={`Home ${isHidden ? 'position-fixed' : ''}`}
      style={{ opacity: isHidden ? 0 : 1 }}
    >
      <div>
        <Scrollama offset={0.5} onStepEnter={onStepEnter}>
          {AvailableSteps.map((text, stepIndex) => (
            <Step data={stepIndex} key={stepIndex}>
              <section
                style={{
                  // margin: "50vh 0",
                  // borderTop: "4px solid gray",
                  // borderBottom: "4px solid red",
                  transition: 'opacity .5s ease-in-out',
                  opacity: currentStepIndex === stepIndex ? 1 : 0,
                }}
              >
                {text === 'first section' && (
                  <IntroHomePage
                    availableWidth={availableWidth}
                    availableHeight={availableHeight}
                  ></IntroHomePage>
                )}
                {text === 'second section' && (
                  <ViewConfereceHomePage
                    availableWidth={availableWidth}
                    availableHeight={availableHeight}
                  ></ViewConfereceHomePage>
                )}
                {text === 'third section' && (
                  <ThirdSection
                    availableWidth={availableWidth}
                    availableHeight={availableHeight}
                  ></ThirdSection>
                )}
                {text === 'fourth section' && (
                  <FourthSection
                    availableWidth={availableWidth}
                    availableHeight={availableHeight}
                  ></FourthSection>
                )}
                {text === 'footer' && (
                  <Footer
                    availableWidth={availableWidth}
                    availableHeight={availableHeight}
                  ></Footer>
                )}
              </section>
            </Step>
          ))}
        </Scrollama>
      </div>
      <ThreeJsBgArch
        availableWidth={availableWidth}
        availableHeight={availableHeight}
        stepIndex={currentStepIndex}
      ></ThreeJsBgArch>
    </div>
  )
}

export default Home
