import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onElevatorSelected } from "../store/slices/elevator/ElevatorSlices";

export const useElevator = () => {
  const { elevators, elevatorSelected } = useSelector(
    (state) => state.elevators
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerElevatorSelected = (id) => {
    dispatch(onElevatorSelected(id));
  };

  const getElevatorSummary = (elevatorId) => {
    const elevatorFound = elevators.find(elevator => elevator.id === elevatorId);
    const elevatorSummary = {
      elevatorCode: elevatorFound.elevatorCode,
      serialNumber: elevatorFound.serialNumber,
      lastMaintenanceDate: elevatorFound.lastMaintenanceDate
    };
    return elevatorSummary;
  };

  const handlerGetElevatorById = (id) => {
    return getElevatorById(id);
  };

  return {
    elevators,
    elevatorSelected,
    handlerElevatorSelected,
    getElevatorSummary
  };
};
