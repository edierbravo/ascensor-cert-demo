import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { TestPage } from "../components/TestPage";
import { Customers } from "../components/Customers";
import { Certificates } from "../components/Certificates";
import { TechniciansMain } from "../components/technicians/TechniciansMain";
import { Inicio } from "../components/Inicio";
import { MainPage } from "../pages/MainPage";
import { NotFound } from "../components/NotFound";

export const UserRoutes = () => {

    return (
            <Routes>
                {/* <Route path="/" element={<Navigate to="login" />} /> */}
                {/* <Route path="/login" element={<LoginPage />} /> */}
                {/* <Route path="/main" element={<Navigate to="" />} /> */}
                <Route path="/main" element={<Inicio />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/technicians" element={<TechniciansMain />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
    );
};
