import { LoginPage } from "./pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { MainPage } from "./pages/MainPage";

export const AppRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <Routes>
      {isAuth ? (
        <Route path="/*" element={<MainPage />} />
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/*" element={<Navigate to={"/login"} />} />
        </>
      )}
    </Routes>
  );
};
