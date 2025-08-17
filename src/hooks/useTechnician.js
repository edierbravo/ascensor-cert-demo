import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export const useTechnician =() => {
    const { technicians } = useSelector(state => state.technicians || { technicians: [] });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return {
        technicians,
    }
}