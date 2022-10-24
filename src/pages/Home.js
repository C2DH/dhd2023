import React, { useState } from 'react'
import ThreeJsBgArch from '../components/ThreeJsBgArch'
import { useCurrentWindowDimensions } from '../hooks/viewport'
import Header from './sections/Header'
import ViewConferece from './sections/ViewConference'
import { Scrollama, Step } from 'react-scrollama'

const AvailableSteps = ['first section', 'second section', 'third section', 'conclusion']

const Home = ({ isMobile }) => {
  const { width, height } = useCurrentWindowDimensions(isMobile)
  const [currentStepIndex, setCurrentStepIndex] = useState(null)

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    console.debug('[Home] @onStepEnter', data)
    setCurrentStepIndex(data)
  }

  return (
    <>
      <div className="Home">
        <Scrollama offset={0.5} onStepEnter={onStepEnter} debug>
          {AvailableSteps.map((text, stepIndex) => (
            <Step data={stepIndex} key={stepIndex}>
              <section
                style={{
                  margin: '50vh 0',
                  borderTop: '4px solid gray',
                  borderBottom: '4px solid red',
                  opacity: currentStepIndex === stepIndex ? 1 : 0.2,
                }}
              >
                {text === 'first section' && (
                  <Header availableWidth={width} availableHeight={height}></Header>
                )}
                {text === 'second section' && (
                  <ViewConferece availableWidth={width} availableHeight={height}></ViewConferece>
                )}
              </section>
            </Step>
          ))}
        </Scrollama>
      </div>
      <ThreeJsBgArch
        availableWidth={width}
        availableHeight={height}
        stepIndex={currentStepIndex}
      ></ThreeJsBgArch>
    </>
  )
}

export default Home
