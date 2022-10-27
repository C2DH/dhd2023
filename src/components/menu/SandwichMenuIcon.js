import "./SandwichMenuIcon.css";
import { a, useSpring } from "react-spring";
import { useEffect } from "react";
import { MenuClosed } from "../../store";

const SandwichMenuIcon = ({ menuStatus }) => {
  const [styles, api] = useSpring(() => ({
    backgroundColor: "#000000",
  }));

  useEffect(() => {
    // console.debug("Color", api.start.color);
    api.start({
      backgroundColor: menuStatus === MenuClosed ? "#000000" : "#ffffff",
    });
  }, [menuStatus, api]);
  return (
    <i className="menu-icon-wrapper flex-center">
      <a.span style={styles}></a.span>
      <a.span style={styles}></a.span>
      <a.span style={styles}></a.span>
    </i>
  );
};

export default SandwichMenuIcon;
