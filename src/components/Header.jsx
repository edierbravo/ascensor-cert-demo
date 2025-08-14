import Logo from "../assets/logo.png";
import { FaAt, FaChildReaching, FaEarthAmericas } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="bg-white border-b border-mainBlue shadow p-4 flex items-center justify-between">
      <div className="left">
        <div className="menu-container">
          <div className="menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="brand">
           <img src={Logo} alt="Logo" className="logo"/>
           <span className="name">SICA | ONAC</span>
        </div>
      </div>

      <div className="right">
        <a href="#">
          <FaAt />
        </a>
        <a href="#">
          <FaChildReaching />
        </a>
        <a href="#">
          <FaEarthAmericas />
        </a>
        <a href="#" className="user">
          <FaUserCircle />
        </a>
      </div>
    </header>
  );
}
