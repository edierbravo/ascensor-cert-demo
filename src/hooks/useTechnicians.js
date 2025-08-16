import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export const useTechnicians =() => {
    const { technicians } = useSelector(state => state.technicians || { technicians: [{
        id: 100000001,
        name: "Eduardo",
        tel: 3140000001,
        emain: "eduardo@gmail.com",
        region: "Zona 1",
        city: "Bogota"
    }] });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return {
        technicians,
    }
}