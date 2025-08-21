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

  const handlerEvaluationSelectedById = (id) => {
    dispatch(onEvaluationsSelectedById(id))
    
    const itemId = getEvaluationById(id)?.item
    dispatch(onItemSelectedById(itemId))
  };

  const getEvaluationById = (id) => {
    const evaluationFound = evaluationsSelected.find((item) => item.id === id);
    return evaluationFound;
  };

  return {
    evaluations,
    evaluationsSelected,
    evaluationSelected,
    handlerEvaluationsSelected,
    handlerEvaluationSelectedById,
    getEvaluationById,
  };
};
