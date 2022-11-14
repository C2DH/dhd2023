import React, { useState, useEffect } from "react";
import ThreeJsBgArch from "../components/ThreeJsBgArch";
import IntroHomePage from "../components/sections/IntroHomePage";
import ViewConfereceHomePage from "../components/sections/ViewConfereceHomePage";
import { Scrollama, Step } from "react-scrollama";
import Menu from "../components/menu/Menu";
import MenuFixed from "../components/menu/MenuFixed";
import ThirdSection from "../components/sections/ThirdSectionHomePage";
import FourthSection from "../components/sections/FourthSectionHomePage";
import Footer from "../components/sections/Footer";

const AvailableSteps = [
  "first section",
  "second section",
  "third section",
  "fourth section",
  "footer",
];

const Home = ({ availableWidth, availableHeight }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  useEffect(() => {
    if (currentStepIndex === 0) {
      document.body.classList.add("bg-light");
      document.body.classList.remove("bg-dark");
    }
    if (currentStepIndex === 1) {
      document.body.classList.add("bg-dark");
      document.body.classList.remove("bg-light");
    }
    if (currentStepIndex === 2) {
      document.body.classList.add("bg-light");
      document.body.classList.remove("bg-dark");
    }
    if (currentStepIndex === 3) {
      document.body.classList.add("bg-dark");
      document.body.classList.remove("bg-light");
    }
    if (currentStepIndex === 4) {
      document.body.classList.add("bg-light");
      document.body.classList.remove("bg-dark");
    }
  }, [currentStepIndex]);

  return (
    <>
      <div className="Home">
        <MenuFixed currentStepIndex={currentStepIndex} />
        <Menu />
        <Scrollama offset={0.5} onStepEnter={onStepEnter}>
          {AvailableSteps.map((text, stepIndex) => (
            <Step data={stepIndex} key={stepIndex}>
              <section
                style={{
                  // margin: "50vh 0",
                  // borderTop: "4px solid gray",
                  // borderBottom: "4px solid red",
                  opacity: currentStepIndex === stepIndex ? 1 : 0,
                }}
              >
                {text === "first section" && (
                  <IntroHomePage
                    availableWidth={availableWidth}
                    availableHeight={availableHeight}
                  ></IntroHomePage>
                )}
                {text === "second section" && (
                  <ViewConfereceHomePage
                    availableWidth={availableWidth}
                    availableHeight={availableHeight}
                  ></ViewConfereceHomePage>
                )}
                {text === "third section" && (
                  <ThirdSection
                    availableWidth={availableWidth}
                    availableHeight={availableHeight}
                  ></ThirdSection>
                )}
                {text === "fourth section" && (
                  <FourthSection
                    availableWidth={availableWidth}
                    availableHeight={availableHeight}
                  ></FourthSection>
                )}
                {text === "footer" && (
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
    </>
  );
};

export default Home;
