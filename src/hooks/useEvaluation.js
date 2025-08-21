import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onEvaluationsSelected, onEvaluationsSelectedById } from "../store/slices/evaluation/evaluationSlice";
import { onItemSelectedById } from "../store/slices/items/ItemSlice";

export const useEvaluation = () => {
  const { evaluations, evaluationsSelected, evaluationSelected } = useSelector(
    (state) => state.evaluations
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerEvaluationsSelected = (items) => {
    dispatch(onEvaluationsSelected(items));
  };

  const handlerEvaluationSelectedById = (Id) => {
    dispatch(onEvaluationsSelectedById(Id))
    console.log(evaluationSelected)
    const itemId = evaluationSelected?.item
    dispatch(onItemSelectedById(itemId))
  };

  const getItemById = (itemId) => {
    const itemFound = inspectionItems.find((item) => item.id === itemId);
    return itemFound;
  };

  return {
    evaluations,
    evaluationsSelected,
    evaluationSelected,
    handlerEvaluationsSelected,
    handlerEvaluationSelectedById,
    getItemById,
  };
};
