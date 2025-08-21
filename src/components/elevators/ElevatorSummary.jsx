import { useElevator } from "../../hooks/useElevator";
import { AiOutlineNumber } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { Avatar } from "@heroui/react";
import { getInitials } from "../../utils/utils";
import { FaBarcode } from "react-icons/fa6";

export const ElevatorSummary = ({ elevatorId }) => {
  const { getElevatorSummary } = useElevator();

  const elevatorSummary = getElevatorSummary(elevatorId);

  return (
    <div className="flex flex-col">
      <span className="font-semibold">{elevatorSummary.elevatorCode}</span>
      <span className="text-gray-500 flex items-center gap-1">
        <FaBarcode className="text-slate-700" />{" "}
        {elevatorSummary.serialNumber}
      </span>
      <span className="text-gray-600 flex items-center gap-1">
        <FaTools className="text-amber-600" />{" "}
        {elevatorSummary.lastMaintenanceDate}
      </span>
    </div>
  );
};
