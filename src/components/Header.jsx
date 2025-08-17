import Logo from "../assets/logo.png";
import { FaAt, FaChildReaching, FaEarthAmericas } from "react-icons/fa6";
import UserIcon from "../assets/user.png";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoMdHelpCircle } from "react-icons/io";
import { useAuth } from "../hooks/useAuth";
import {
 Dropdown,
 DropdownTrigger,
 DropdownMenu,
 DropdownItem,
 Avatar,
} from "@heroui/react";

// const isMenuOpen = JSON.parse(sessionStorage.getItem("isMenuOpen"));

export const Header = ({ setIsMenuOpen, isMenuOpen }) => {
  const { handlerLogout } = useAuth();

  const onClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    sessionStorage.setItem("isMenuOpen", !isMenuOpen);
    console.log(!isMenuOpen);
  };

  const onLogout = () => {
    handlerLogout();
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
            <img src={Logo} alt="Logo" className="logo min-w-[2.5rem]" />
            {/* <span className="whitespace-nowrap name">SICA | ONAC</span> */}
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
            <IoMdHelpCircle className="img" />
          </a>
          
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                src={UserIcon}
              />
            </DropdownTrigger >
            <DropdownMenu aria-label="Profile Actions" variant="light" color="default" className="p-1">
              <DropdownItem key="profile" className="h-10 gap-2" textValue="Usuario" showDivider>
                <p className="font-semibold text-black">Ingresaste como:</p>
                <p className="font-semibold text-stone-600 pl-[5px]">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="logout" color="danger" textValue="Logout" 
              className="text-red-700 hover:text-red-600" onClick={onLogout}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </header>
    </>
  );
};
