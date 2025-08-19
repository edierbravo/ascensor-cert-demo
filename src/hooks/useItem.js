import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useItem = () => {
  const { inspectionItems } = useSelector((state) => state.inspectionItems || { inspectionItems: [] });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return {
    inspectionItems: inspectionItems,
  };
};
