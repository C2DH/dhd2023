import React, { useState } from "react";
import ThreeJsBgArch from "../components/ThreeJsBgArch";
import { useCurrentWindowDimensions } from "../hooks/viewport";
import IntroHomePage from "../components/sections/IntroHomePage";
import ViewConfereceHomePage from "../components/sections/ViewConfereceHomePage";
import { Scrollama, Step } from "react-scrollama";
import Menu from "../components/menu/Menu";
import MenuFixed from "../components/menu/MenuFixed";

const AvailableSteps = [
  "first section",
  "second section",
  "third section",
  "conclusion",
];

const Home = ({ isMobile }) => {
  const { width, height } = useCurrentWindowDimensions(isMobile);
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    console.debug("[Home] @onStepEnter", data);
    setCurrentStepIndex(data);
  };

  return (
    <>
      <div className="Home">
        <MenuFixed />
        <Menu />
        <Scrollama offset={0.5} onStepEnter={onStepEnter} debug>
          {AvailableSteps.map((text, stepIndex) => (
            <Step data={stepIndex} key={stepIndex}>
              <section
                style={{
                  // margin: "50vh 0",
                  borderTop: "4px solid gray",
                  borderBottom: "4px solid red",
                  opacity: currentStepIndex === stepIndex ? 1 : 0.2,
                }}
              >
                {text === "first section" && (
                  <IntroHomePage
                    availableWidth={width}
                    availableHeight={height}
                  ></IntroHomePage>
                )}
                {text === "second section" && (
                  <ViewConfereceHomePage
                    availableWidth={width}
                    availableHeight={height}
                  ></ViewConfereceHomePage>
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
  );
};

export default Home;
