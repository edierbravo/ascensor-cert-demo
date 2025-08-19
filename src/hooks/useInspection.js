import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useInspection = () => {
  const { inspections } = useSelector(
    (state) => state.inspections || { inspections: [] }
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return {
    inspections: inspections,
  };
};
