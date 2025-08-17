import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./slices/auth/AuthSlice";
import { TechnicianSlice } from "./slices/technicians/TechnicianSlice";
import { CustomerSlice } from "./slices/customers/CustomerSlice";
import { ElevatorSlice } from "./slices/elevator/ElevatorSlices";

export const store = configureStore({
    reducer: {
        // users: usersSlice.reducer,
        auth: AuthSlice.reducer,
        technicians: TechnicianSlice.reducer,
        customers: CustomerSlice.reducer,
        elevators: ElevatorSlice.reducer,
    }
})