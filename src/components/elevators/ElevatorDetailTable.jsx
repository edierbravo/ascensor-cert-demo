import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Alert,
} from "@heroui/react";
import { RiErrorWarningFill } from "react-icons/ri";

const labels = {
  serialNumber: { description: "Número de serie", section: "general" },
  elevatorId: { description: "Número de Ascensor", section: "general" },
  customerNit: { description: "Edificio", section: "general"},
  brand: { description: "Marca", section: "general" },
  manufacturer: { description: "Fabricante", section: "general" },

  maintenanceCompany: { description: "Empresa de mantenimiento", section: "maintenance" },
  technicianName: { description: "Técnico responsable", section: "maintenance" },
  lastMaintenanceDate: { description: "Fecha de último mantenimiento", section: "maintenance" },

  commissioningDate: { description: "Fecha de puesta en marcha", section: "installation" },
  lastInspectionDate: { description: "Fecha de última inspección", section: "installation" },

  machineType: { description: "Tipo de máquina", section: "technical" },
  threading: { description: "Enhebrado", section: "technical" },
  capacityKg: { description: "Capacidad (Kg)", section: "technical" },
  capacityPersons: { description: "Capacidad (personas)", section: "technical" },
  governor: { description: "Limitador", section: "technical" },
  tractionBy: { description: "Tracción por", section: "technical" },
  machineRoom: { description: "Cuarto de máquinas", section: "technical" },
  pitDepthMm: { description: "Profundidad de foso (mm)", section: "technical" },
  bufferType: { description: "Tipo de buffer", section: "technical" },
  stopsNumber: { description: "Número de Paradas", section: "technical" },
  driveType: { description: "Tipo de accionamiento", section: "technical" },
  controlType: { description: "Tipo de control", section: "technical" },
};

export const ElevatorDetailTable = ({ data, seccionSelected }) => {
  if (!data)
    return (
      <Alert
        hideIconWrapper
        className="bg-yellow-100 text-yellow-700"
        icon={<RiErrorWarningFill />}
        title={`No hay detalles para mostrar`}
        variant={"flat"}
      />
    );

  const keys = Object.keys(data).filter(
    (key) => key !== "id"
  );

  return (
    <Table
      aria-label="Detalles del ascensor"
      isStriped
      isHeaderSticky
      removeWrapper
      className="max-h-[40vh] min-h-[40vh] overflow-y-auto p-2 m-2"
    >
      <TableHeader className="bg-red-600">
        <TableColumn className="text-stone-800 text-lg font-semibold">Característica</TableColumn>
        <TableColumn className="text-stone-800 text-lg font-semibold">Valor</TableColumn>
      </TableHeader>
      <TableBody className="">
        {keys.map((key) => {
          if (labels[key].section !== seccionSelected) return null;

          return (
            <TableRow key={key}>
              <TableCell className="font-semibold capitalize text-base">{labels[key].description}</TableCell>
              <TableCell className="text-base">{data[key]}</TableCell>
          </TableRow>
        )},
        )}
      </TableBody>
    </Table>
  );
};
