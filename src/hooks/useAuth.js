import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onLogin, onLogout } from "../store/slices/auth/AuthSlice";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerLogin = async (email, password) => {
    dispatch(onLogin());
    sessionStorage.setItem(
      "login",
      JSON.stringify({
        isAuth: true,
      })
    );
    navigate("/main");
  };

  const handlerLogout = () => {
    dispatch(onLogout());
    sessionStorage.setItem(
      "login",
      JSON.stringify({
        isAuth: false,
      })
    );
    navigate("/login");
  };

  return {
    login: {
      isAuth,
    },
    handlerLogin,
    handlerLogout,
  };
};
