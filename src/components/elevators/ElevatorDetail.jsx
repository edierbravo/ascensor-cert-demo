import {
  Button,
  useDisclosure,
} from "@heroui/react";
import { ElevatorDetailModal } from "./ElevatorDetailModal";
import React, { useEffect, useState } from "react";
import { useElevator } from "../../hooks/useElevator";
import { RiErrorWarningFill } from "react-icons/ri";

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

export const ElevatorDetail = ({ elevatorId }) => {
  const { handlerElevatorSelected, elevatorSelected } = useElevator();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [elevator, setElevator] = useState(elevatorSelected);

  const handleOpen = () => {
    handlerElevatorSelected(elevatorId);
    // setElevator(elevatorSelected);
    onOpen();
  };

  return (
    <>
      <Button
        onPress={() => handleOpen()}
        className="bg-blue-600 text-white hover:bg-blue-700"
      >
        Mostrar
      </Button>

      <ElevatorDetailModal
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};
