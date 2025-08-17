import { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  getKeyValue,
} from "@heroui/react";
import { Paginator } from "../Paginator";
import { useElevator } from "../../hooks/useelevator";

export const ElevatorMain = () => {
  const { elevators } = useElevator();
  const [items, setItems] = useState([]);
  const isLoading = false; 
  const loadingState = isLoading || elevators?.length === 0 ? "loading" : "idle";

  return (
    <>
      <Table
      isStriped 
      aria-label="Example table with client async pagination"
      bottomContent={
       <Paginator 
         items={items}
         setItems={setItems}
         data={elevators}
       />
      }
       classNames={{
        base: "",
        table: "",
      }}
    >


      <TableHeader>
        {/* Datos de identificacion */}
        <TableColumn key="serialNumber" className="text-black text-base font-semibold">Numero de serie</TableColumn>
        <TableColumn key="elevatorId" className="text-black text-base font-semibold">Codigo</TableColumn>
        <TableColumn key="brand" className="text-black text-base font-semibold">Marca</TableColumn>
        {/* Datos de la empresa de mantenimiento */}
         <TableColumn key="maintenanceCompany" className="text-black text-base font-semibold">Empresa de mantenimiento</TableColumn>
        <TableColumn key="technicianName" className="text-black text-base font-semibold">Nombre tecnico encargado</TableColumn>
        <TableColumn key="lastMaintenanceDate" className="text-black text-base font-semibold">Fecha ultimo mantenimiento</TableColumn>
        {/* Datos de instalacion */}
        <TableColumn key="customerNit" className="text-black text-base font-semibold">Edificio</TableColumn>
        <TableColumn key="commissioningDate" className="text-black text-base font-semibold">Fecha puesto en marcha</TableColumn>
        <TableColumn key="lastInspectionDate" className="text-black text-base font-semibold">Fecha ultima inspeccion</TableColumn>
        {/* Datos de la inspeccion */}
        {/* Caracteristicas tecnicas */}
        <TableColumn key="driveType" className="text-black text-base font-semibold">Tipo de accionamiento</TableColumn>
        <TableColumn key="controlType" className="text-black text-base font-semibold">Tipo de control</TableColumn>
        <TableColumn key="threading" className="text-black text-base font-semibold">Enhebrado</TableColumn>
        <TableColumn key="capacityPersons" className="text-black text-base font-semibold">Capacidad personas</TableColumn>
        <TableColumn key="capacityKg" className="text-black text-base font-semibold">Capacidad (Kg)</TableColumn>
        <TableColumn key="stopsNumber" className="text-black text-base font-semibold">Numero de paradas</TableColumn>
        <TableColumn key="governor" className="text-black text-base font-semibold">Limitador</TableColumn>
        <TableColumn key="machineType" className="text-black text-base font-semibold">Tipo de maquina</TableColumn>
        <TableColumn key="manufacturer" className="text-black text-base font-semibold">Fabricante</TableColumn>
        <TableColumn key="tractionBy" className="text-black text-base font-semibold">Tracción</TableColumn>
        <TableColumn key="machineRoom" className="text-black text-base font-semibold">Cuarto de maquinas</TableColumn>
        <TableColumn key="pitDepthMm" className="text-black text-base font-semibold">Profundidad de foso (mm)</TableColumn>
        <TableColumn key="bufferType" className="text-black text-base font-semibold">Tipo de buffer</TableColumn>

      </TableHeader>
       <TableBody items={items}
        loadingContent={<Spinner />}
        loadingState={loadingState}
       >
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </>
  );
};
