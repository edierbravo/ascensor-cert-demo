import { configureStore } from "@reduxjs/toolkit";
// import { usersSlice } from "./slices/users/usersSlice";
import { AuthSlice } from "./slices/auth/AuthSlice";
import { TechniciansSlice } from "./slices/technicians/TechniciansSlice";

export const store = configureStore({
    reducer: {
        // users: usersSlice.reducer,
        auth: AuthSlice.reducer,
        technicians: TechniciansSlice.reducer
    }
})