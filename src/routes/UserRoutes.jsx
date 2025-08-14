import { Navigate, Route, Routes } from "react-router-dom";
// import { LoginPage } from "../pages/LoginPage";
// import { UsersPage } from "../pages/UsersPage";
// import { SideBar } from "../components/layout/SideBar";
// import { RegisterPage } from "../pages/RegisterPage";
// import { useAuth } from "../auth/hooks/useAuth";
import { useSelector } from "react-redux";
import { MainPage } from "../pages/MainPage";

export const UserRoutes = ({ handlerHideSideBar, value1, value2 }) => {
    const { isAdmin } = useSelector(state => state.auth);

    return (
        <>
        {/* <div className={value1}>
            <SideBar handlerHideSideBar={handlerHideSideBar} />
        </div> */}

            <div className={value2}>
                <Routes>
                    <Route path="/" element={<Navigate to="login" />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/main" element={<MainPage />} />

                    {/* <Route path="/users/page/:page" element={<UsersPage />} />
                    {isAdmin && (
                        <Route path="/register-user" element={<RegisterPage />} />
                    )}
                    {isAdmin && (
                        <Route path="/users/edit/:id" element={<RegisterPage />} />
                    )} */}

                    {/* Agregamos una ruta para manejar rutas desconocidas  */}
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </div>
        </>
    );
};
