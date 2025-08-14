import { useNavigate } from "react-router-dom"

export const useAuth = () => {
    const navigate = useNavigate();

    const handlerLogin = async (email, password) => {
        navigate('/main')
    };

    const handleLogout = () => {
        navigate('/login')
    };

    return {
        handlerLogin,
        handleLogout,
    };
};
