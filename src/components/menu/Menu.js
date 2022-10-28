import "./Menu.css";
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
