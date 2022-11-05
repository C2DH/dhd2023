import React from "react";
import SandwichMenuIcon from "./SandwichMenuIcon";
import Dhd2023Logo from "../svg/dhd2023Logo";
import { MenuClosed, MenuOpen, useMenuStore } from "../../store";
import "./MenuFixed.css";

const MenuFixed = ({ currentStepIndex }) => {
  const menuStatus = useMenuStore((state) => state.menuStatus);
  const setMenuStatus = useMenuStore((state) => state.setMenuStatus);

  return (
    <header className="menu-fixed">
      <Dhd2023Logo
        currentStepIndex={currentStepIndex}
        menuStatus={menuStatus}
      />

      <div
        className={`sandwich-menu ${menuStatus === MenuOpen ? "active" : ""} `}
        onClick={() => {
          setMenuStatus(menuStatus === MenuOpen ? MenuClosed : MenuOpen);
        }}
      >
        <SandwichMenuIcon
          menuStatus={menuStatus}
          currentStepIndex={currentStepIndex}
        />
      </div>
    </header>
  );
};

export default MenuFixed;
