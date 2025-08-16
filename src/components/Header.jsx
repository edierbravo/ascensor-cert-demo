import Logo from "../assets/logo.png";
import { FaAt, FaChildReaching, FaEarthAmericas } from "react-icons/fa6";
import UserIcon from "../assets/user.png";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const isMenuOpen = JSON.parse(sessionStorage.getItem("isMenuOpen"));

export const Header = ({ setIsMenuOpen, isMenuOpen }) => {
  const onClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    sessionStorage.setItem("isMenuOpen", !isMenuOpen);
    console.log(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="left">
          <div
            className={`menu-container menu ${isMenuOpen ? "menu-toggle" : ""}`}
            onClick={onClickMenu}
          >
            {isMenuOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          </div>

          <div className="brand">
            <img src={Logo} alt="Logo" className="logo" />
            <span className="name">SICA</span>
            <div className="name"></div>
            <span className="name">ONAC</span>
          </div>
        </div>

        <div className="right">
          <a href="#" className="icons-header">
            <FaAt className="img" />
          </a>
          <a href="#" className="icons-header">
            <FaChildReaching className="img" />
          </a>
          <a href="#" className="icons-header">
            <FaEarthAmericas className="img" />
          </a>
          <img src={UserIcon} alt="User" className="user-icon" />
        </div>
      </header>
    </>
  );
};
