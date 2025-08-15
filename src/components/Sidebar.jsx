import { IoHome } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { BsPersonFillGear } from "react-icons/bs";
import { PiCertificateFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
// import { onLogout } from "../store/slices/auth/AuthSlice";
import { useAuth } from "../hooks/useAuth";

// const isMenuOpen = JSON.parse(sessionStorage.getItem('isMenuOpen'))

export const Sidebar = ({isMenuOpen}) => {

const { handlerLogout } = useAuth();
  const onLogout = () => {
    handlerLogout();
  }

  return (
    <>
        <div className={`sidebar ${!isMenuOpen ? "menu-toggle" : ""}`}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/main">
                            <IoHome className="img"/>
                            <span>Inicio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/certificates">
                            <PiCertificateFill className="img"/>
                            <span>Certificados</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/customers">
                            <FaBuilding className="img"/>
                            <span>Clientes</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/technicians">
                            <BsPersonFillGear className="img"/>
                            <span>Tecnicos</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/test">
                            <FaBuilding className="img"/>
                            <span>Test</span>
                        </NavLink>
                    </li>
                    <button onClick={onLogout}>Exit</button>
                </ul>
            </nav>
        </div>
    </>
  );
}
