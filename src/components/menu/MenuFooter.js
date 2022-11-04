import { dataFooterMenu } from "../../Data";
import "./MenuFooter.css";

const menuFooter = () => {
  return (
    <div className="footer-menu-wrapper d-flex align-items-center">
      <span className="footer-line"></span>
      <ul className="d-flex align-content-flex-end">
        {dataFooterMenu.map((dataFooterMenu, index) => {
          return (
            <li key={dataFooterMenu.title}>
              <a href="/">{dataFooterMenu.title} </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default menuFooter;
