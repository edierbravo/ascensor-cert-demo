import { IoHome } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { BsPersonFillGear } from "react-icons/bs";
import { PiCertificateFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { useAuth } from "../hooks/useAuth";

// const isMenuOpen = JSON.parse(sessionStorage.getItem('isMenuOpen'))

export const Sidebar = ({ isMenuOpen }) => {
  const colorActive = "blue-100";

  const { handlerLogout } = useAuth();
  const onLogout = () => {
    handlerLogout();
  };

  return (
    <>
      <div className={`sidebar ${!isMenuOpen ? "menu-toggle" : ""}`}>
        {/* <nav> */}
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              to="/main"
              className={({ isActive }) =>
                `nav-link  ${isActive ? `bg-${colorActive}` : ""}`
              }
            >
              <IoHome className="img" />
              <span>Inicio</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/certificates"
              className={({ isActive }) =>
                `nav-link  ${isActive ? `bg-${colorActive}` : ""}`
              }
            >
              <PiCertificateFill className="img" />
              <span>Certificados</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/customers"
              className={({ isActive }) =>
                `nav-link  ${isActive ? `bg-${colorActive}` : ""}`
              }
            >
              <FaBuilding className="img" />
              <span>Clientes</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technicians"
              className={({ isActive }) =>
                `nav-link  ${isActive ? `bg-${colorActive}` : ""}`
              }
            >
              <BsPersonFillGear className="img" />
              <span>Tecnicos</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/test"
              className={({ isActive }) =>
                `nav-link  ${isActive ? `bg-${colorActive}` : ""}`
              }
            >
              <FaBuilding className="img" />
              <span>Test</span>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onLogout}>
              <IoLogOut className="img" />
              <span>Logout</span>
            </NavLink>
          </li>
        </ul>
        {/* </nav> */}
      </div>
    </>
  );
};
