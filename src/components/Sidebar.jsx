import { IoHome } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { BsPersonFillGear } from "react-icons/bs";
import { PiCertificateFill } from "react-icons/pi";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { useAuth } from "../hooks/useAuth";
import { GrElevator } from "react-icons/gr";
import { FaElevator } from "react-icons/fa6";

export const sidebarOptions = [
  { path: "/inspections", icon: <PiCertificateFill className="img" />, label: "Inspecciones" },
  { path: "/customers", icon: <FaBuilding className="img" />, label: "Clientes" },
  { path: "/elevators", icon: <FaElevator className="img" />, label: "Ascensores" },
  { path: "/technicians", icon: <BsPersonFillGear className="img" />, label: "Técnicos" },
  { path: "/items", icon: <FaClipboardCheck className="img" />, label: "Items" },
  { path: "/test", icon: <IoHome className="img" />, label: "test" },
];

export const Sidebar = ({ isMenuOpen }) => {
  const activeStyle = "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800";
  const normalStyle = "text-black hover:bg-stone-300 hover:text-black active:bg-stone-400";

  return (
    <>
      <div className={`sidebar ${!isMenuOpen ? " menu-toggle flex" : ""}`}>
        <ul className="nav nav-pills">
          {
            sidebarOptions.map((option) => (
              <li key={option.path}>
                <NavLink
                  to={option.path}
                  className={({ isActive }) =>
                    `${isActive ? `${activeStyle}` : `${normalStyle}`}`
                  }
                >
                  {option.icon}
                  <span>{option.label}</span>
                </NavLink>
              </li>
            ))
          }
          {/* <li>
            <NavLink
              to="/certificates"
              className={({ isActive }) =>
                `${isActive ? `${activeStyle}` : `${normalStyle}`}`
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
               `${isActive ? `${activeStyle}` : `${normalStyle}`}`
              }
            >
              <FaBuilding className="img" />
              <span>Clientes</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/elevators"
              className={({ isActive }) =>
                `${isActive ? `${activeStyle}` : `${normalStyle}`}`
              }
            >
              <FaElevator className="img" />
              <span>Ascensores</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technicians"
              className={({ isActive }) =>
                `${isActive ? `${activeStyle}` : `${normalStyle}`}`
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
                `${isActive ? `${activeStyle}` : `${normalStyle}`}`
              }
            >
              <FaBuilding className="img" />
              <span>Test</span>
            </NavLink>
          </li> */}
        </ul>
        {/* </nav> */}
      </div>
    </>
  );
};
