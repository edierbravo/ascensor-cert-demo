import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./slices/auth/AuthSlice";
import { TechnicianSlice } from "./slices/technicians/TechnicianSlice";
import { CustomerSlice } from "./slices/customers/CustomerSlice";
import { ElevatorSlice } from "./slices/elevator/ElevatorSlices";
import { ItemSlice } from "./slices/items/ItemSlice";
import { InspectionSlice } from "./slices/inspections/inspectionSlice";
import { EvaluationSlice } from "./slices/evaluation/evaluationSlice";

export const store = configureStore({
    reducer: {
        // users: usersSlice.reducer,
        auth: AuthSlice.reducer,
        technicians: TechnicianSlice.reducer,
        customers: CustomerSlice.reducer,
        elevators: ElevatorSlice.reducer,
        inspectionItems: ItemSlice.reducer,
        inspections: InspectionSlice.reducer,
        evaluations: EvaluationSlice.reducer
    }
})