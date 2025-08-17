import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export const useElevator =() => {
    const { elevators } = useSelector(state => state.elevators || { elevators: [] });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return {
        elevators,
    }
}