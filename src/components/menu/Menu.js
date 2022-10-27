import Dhd2023Logo from "../svg/dhd2023Logo";
// import { Button } from "react-bootstrap";
import "./Menu.css";
import SandwichMenuIcon from "./SandwichMenuIcon";
import { Plus } from "lucide-react";

const Menu = () => {
  return (
    <nav className="menu-wrapper">
      <ul>
        <li>
          Programm & Events
          <Plus className="icon-plus" />
        </li>
        <li>Komitee & Team</li>
        <li>Call for Papers</li>
      </ul>
    </nav>
  );
};

export default Menu;
