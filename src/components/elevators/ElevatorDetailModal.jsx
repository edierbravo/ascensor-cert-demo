import {
  Alert,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tabs,
  Tab,
  Button,
} from "@heroui/react";
import { RiErrorWarningFill } from "react-icons/ri";
import { useState } from "react";
import { useElevator } from "../../hooks/useElevator";
import { DetailTable } from "../DetailTable";

export const tabs = [
  { key: "general", title: "General" },
  { key: "maintenance", title: "Mantenimiento" },
  { key: "installation", title: "Instalación" },
  { key: "technical", title: "Técnicos" },
];

const labels = {
  serialNumber: { description: "Número de serie", section: "general" },
  elevatorCode: { description: "Número de Ascensor", section: "general" },
  customerNit: { description: "Edificio", section: "general" },
  brand: { description: "Marca", section: "general" },
  manufacturer: { description: "Fabricante", section: "general" },

  maintenanceCompany: {
    description: "Empresa de mantenimiento",
    section: "maintenance",
  },
  technicianName: {
    description: "Técnico responsable",
    section: "maintenance",
  },
  lastMaintenanceDate: {
    description: "Fecha de último mantenimiento",
    section: "maintenance",
  },

  commissioningDate: {
    description: "Fecha de puesta en marcha",
    section: "installation",
  },
  lastInspectionDate: {
    description: "Fecha de última inspección",
    section: "installation",
  },

  machineType: { description: "Tipo de máquina", section: "technical" },
  threading: { description: "Enhebrado", section: "technical" },
  capacityKg: { description: "Capacidad (Kg)", section: "technical" },
  capacityPersons: {
    description: "Capacidad (personas)",
    section: "technical",
  },
  governor: { description: "Limitador", section: "technical" },
  tractionBy: { description: "Tracción por", section: "technical" },
  machineRoom: { description: "Cuarto de máquinas", section: "technical" },
  pitDepthMm: { description: "Profundidad de foso (mm)", section: "technical" },
  bufferType: { description: "Tipo de buffer", section: "technical" },
  stopsNumber: { description: "Número de Paradas", section: "technical" },
  driveType: { description: "Tipo de accionamiento", section: "technical" },
  controlType: { description: "Tipo de control", section: "technical" },
};

export const ElevatorDetailModal = ({ isOpen, onClose }) => {
  const { elevatorSelected } = useElevator();
  const keys = Object.keys(elevatorSelected).filter((key) => key !== "id");
  const [seccionSelected, setSeccionSelected] = useState(tabs[0].key);
  const filteredKeys = keys.filter(
    (key) => labels[key].section === seccionSelected
  );

  return (
    <Modal
      isOpen={isOpen}
      size={"lg"}
      onClose={onClose}
      placement="center"
      className="z-20"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-3 text-black font-bold text-xl">
              <p className="pt-3 pl-2">Detalles del ascensor</p>
            </ModalHeader>
            <ModalBody className="text-lg">
              <Tabs
                aria-label="Tabs radius"
                size={"lg"}
                radius={"full"}
                variant="solid"
                selectedKey={seccionSelected}
                onSelectionChange={setSeccionSelected}
                classNames={{
                  tabContent:
                    "text-stone-600 group-data-[selected=true]:text-white text-lg",
                  cursor: "bg-stone-500 text-white",
                  tabList: `
                        gap-1 rounded-xl w-full px-1 py-2
                        grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))]
                        sm:flex
                        `,
                }}
              >
                {tabs.map((tab) => (
                  <Tab key={tab.key} title={tab.title} />
                ))}
              </Tabs>

              {!elevatorSelected ? (
                <Alert
                  hideIconWrapper
                  className="bg-yellow-100 text-yellow-700 max-h-15"
                  icon={<RiErrorWarningFill />}
                  title={`No hay detalles para mostrar`}
                  variant={"flat"}
                />
              ) : (
                <DetailTable
                  keys={filteredKeys}
                  labels={labels}
                  data={elevatorSelected}
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
