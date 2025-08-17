import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export const useCustomer =() => {
    const { customers } = useSelector(state => state.customers || { customers: [] });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return {
        customers,
    }
}