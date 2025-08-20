import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useItem = () => {
  const { inspectionItems } = useSelector((state) => state.inspectionItems || { inspectionItems: [] });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getItemById = (itemId) => {
    const itemFound = inspectionItems.find(item => item.id === itemId);
    return itemFound;
  };


  return {
    inspectionItems,
    getItemById,
  };
};
