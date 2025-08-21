import {
  Alert,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import { RiErrorWarningFill } from "react-icons/ri";
import { DetailTable } from "../DetailTable";
import { useCustomer } from "../../hooks/useCustomer";

const labels = {
  name: { description: "Nombre", section: "general" },
  nit: { description: "NIT", section: "general" },
  address: { description: "Dirección", section: "general" },
  buildingType: { description: "Tipo de Edificio", section: "general" },
  administrator: { description: "Administrador", section: "general" },
  email: { description: "Email", section: "general" },
  phone: { description: "Teléfono", section: "general" },
};

export const CustomerDetailModal = ({ isOpen, onClose }) => {
  const { customerSelected } = useCustomer();
  const keys = Object.keys(customerSelected).filter((key) => (key !== "elevators"));

  return (
    <Modal
      isOpen={isOpen}
      size={"lg"}
      onClose={onClose}
      placement="center"
      className="z-20 min-h-[30v]"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-3 text-black font-bold text-xl">
              <p className="pt-3 pl-2">Detalles del cliente</p>
            </ModalHeader>
            <ModalBody className="text-lg">

              {!customerSelected ? (
                <Alert
                  hideIconWrapper
                  className="bg-yellow-100 text-yellow-700"
                  icon={<RiErrorWarningFill />}
                  title={`No hay detalles para mostrar`}
                  variant={"flat"}
                />
              ) : (
                <DetailTable
                  keys={keys}
                  labels={labels}
                  data={customerSelected}
                />
              )}
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                onPress={onClose}
                className="bg-red-600 text:white hover:bg-red-700 active:bg-red-800"
              >
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
