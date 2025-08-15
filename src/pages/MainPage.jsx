import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Main } from "../components/Main";
import { useState } from "react";

const initialOpenSideBar = JSON.parse(sessionStorage.getItem('isMenuOpen'));

export const MainPage = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(initialOpenSideBar);
    
    return (
        <>
            <Header
                setIsMenuOpen={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
            />
            <Sidebar
                isMenuOpen={isMenuOpen}
            />
            <Main
                isMenuOpen={isMenuOpen}
            />
        </>

    );
};
