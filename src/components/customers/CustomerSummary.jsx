import { useCustomer } from "../../hooks/useCustomer";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiIdentificationBadgeFill } from "react-icons/pi";

export const CustomerSummary = ({ customerNit }) => {
  const { getCustomerSummary } = useCustomer();

  const customerSummary = getCustomerSummary(customerNit);

  return (
    <div className="flex flex-col">
      <span className="font-semibold">
        {customerSummary.name}
      </span>
      <span className="text-gray-500 flex items-center gap-1">
        <PiIdentificationBadgeFill className="text-blue-600"/> {customerSummary.nit}</span>
      <span className="text-gray-600 flex items-center gap-1">
        <FaMapMarkerAlt className="text-red-600"/> {customerSummary.address}
      </span>
    </div>
  );
};
