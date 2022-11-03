import "./SandwichMenuIcon.css";
import { a, useSpring } from "react-spring";
import { useEffect } from "react";
import { MenuOpen } from "../../store";
import { Button } from "react-bootstrap";

const SandwichMenuIcon = ({ menuStatus, currentStepIndex }) => {
  const [styles, api] = useSpring(() => ({}));

  useEffect(() => {
    console.debug("Menu-Cross", currentStepIndex);
    api.start({
      backgroundColor:
        menuStatus === MenuOpen ||
        currentStepIndex === 1 ||
        currentStepIndex === 3
          ? "var(--white)"
          : "var(--black)",
    });
  }, [menuStatus, currentStepIndex, api]);
  return (
    <Button tabIndex={0} className="menu-icon-wrapper">
      <i className="flex-center">
        <a.span style={styles}></a.span>
        <a.span style={styles}></a.span>
        <a.span style={styles}></a.span>
      </i>
    </Button>
  );
};

export default SandwichMenuIcon;
