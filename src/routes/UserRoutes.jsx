import { Route, Routes } from "react-router-dom";
import { TestPage } from "../components/TestPage";
import { CustomerMain } from "../components/customers/CustomerMain";
import { Certificates } from "../components/Certificates";
import { TechnicianMain } from "../components/technicians/TechnicianMain";
import { NotFound } from "../components/NotFound";
import { ElevatorMain } from "../components/elevators/ElevatorMain";
import { ItemMain } from "../components/items/ItemMain";
import { InspectionMain } from "../components/inspections/inspectionMain";

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
      <Route path="/inspections" element={<InspectionMain />} />
      <Route path="/technicians" element={<TechnicianMain />} />
      <Route path="/items" element={<ItemMain />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
