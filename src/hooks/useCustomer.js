import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onCustomerSelected } from "../store/slices/customers/CustomerSlice";

export const useCustomer = () => {
  const { customers, customerSelected } = useSelector(
    (state) => state.customers
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerCustomerSelected = (nit) => {
    dispatch(onCustomerSelected(nit));
  };

  const getCustomerSummary = (customerNit) => {
    const customerFound = customers.find(customer => customer.nit === customerNit);
    const customerSumary = {
      nit: customerFound.nit,
      name: customerFound.name,
      address: customerFound.address
    };
    return customerSumary;
  };

  return {
    customers,
    customerSelected,
    handlerCustomerSelected,
    getCustomerSummary,
  };
};
