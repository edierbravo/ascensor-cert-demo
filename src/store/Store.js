import { configureStore } from "@reduxjs/toolkit";
// import { usersSlice } from "./slices/users/usersSlice";
import { AuthSlice } from "./slices/auth/AuthSlice";
import { TechnicianSlice } from "./slices/technicians/TechnicianSlice";
import { CustomerSlice } from "./slices/customers/CustomerSlice";

export const store = configureStore({
    reducer: {
        // users: usersSlice.reducer,
        auth: AuthSlice.reducer,
        technicians: TechnicianSlice.reducer,
        customers: CustomerSlice.reducer,
    }
})