import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { TestPage } from "../components/TestPage";
import { CustomerMain } from "../components/customers/CustomerMain";
import { Certificates } from "../components/Certificates";
import { TechnicianMain } from "../components/technicians/TechnicianMain";
import { Inicio } from "../components/Inicio";
import { MainPage } from "../pages/MainPage";
import { NotFound } from "../components/NotFound";
import {ElevatorMain} from "../components/elevators/ElevatorMain";

export const UserRoutes = () => {

    return (
            <Routes>
                {/* <Route path="/" element={<Navigate to="login" />} /> */}
                {/* <Route path="/login" element={<LoginPage />} /> */}
                {/* <Route path="/main" element={<Navigate to="" />} /> */}
                {/* <Route path="/main" element={<Inicio />} /> */}
                <Route path="/main" element={<TestPage />} />
                <Route path="/customers" element={<CustomerMain />} />
                <Route path="/elevators" element={<ElevatorMain />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/technicians" element={<TechnicianMain />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
    );
};
