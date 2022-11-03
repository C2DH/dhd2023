import "./Menu.css";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import DropDownMenu from "./DropDownMenu";
import { MenuOpen, MenuClosed, useMenuStore } from "../../store";

const Menu = () => {
  const [dropdown, setDropdown] = useState(true);
  const menuStatus = useMenuStore((state) => state.menuStatus);
  console.log("menustus", MenuOpen);
  const toggleMenu = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="menu-wrapper">
      <ul
        className={
          menuStatus === MenuClosed ? `d-none d-sm-none d-md-flex` : null
        }
      >
        <li
          className={dropdown === false ? `active` : null}
          onClick={toggleMenu}
          onMouseOver={(event) => setDropdown(false)}
          onMouseOut={(event) => setDropdown(true)}
        >
          <a className="programm-events" href="/#" tabIndex={1}>
            Programm & Events
            {dropdown === false ? (
              <Minus className="icon-plus" />
            ) : (
              <Plus className="icon-plus" />
            )}
            <DropDownMenu />
          </a>
        </li>
        <li>
          <a href="/" tabIndex={1}>
            Komitee & Team
          </a>
        </li>
        <li>
          <a href="/" tabIndex={1}>
            Call for Papers
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
