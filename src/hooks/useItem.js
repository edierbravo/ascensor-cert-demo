import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onItemSelectedById } from "../store/slices/items/ItemSlice";

export const useItem = () => {
  const { inspectionItems, itemSelected } = useSelector(
    (state) => state.inspectionItems
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getItemById = (itemId) => {
    const itemFound = inspectionItems.find((item) => item.id === itemId);
    return itemFound;
  };

  const handlerItemSelectedById = (itemId) => {
    dispatch(onItemSelectedById(itemId));
  };

  return {
    itemSelected,
    inspectionItems,
    getItemById,
    handlerItemSelectedById,
  };
};
