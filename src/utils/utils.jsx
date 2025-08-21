import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export const getInitials = (label) => {
  return label
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

export const getIconByBolean =(value)=>{
  return value ? 
  <FaCheckCircle className="text-green-600"/> : <ImCross className="text-red-500" />
}

{
  /* Datos de la empresa de mantenimiento */
}
{
  /* <TableColumn key="maintenanceCompany" className="text-black text-base font-semibold">Empresa de mantenimiento</TableColumn>
        <TableColumn key="technicianName" className="text-black text-base font-semibold">Técnico encargado</TableColumn>
        <TableColumn key="lastMaintenanceDate" className="text-black text-base font-semibold">Fecha ultimo mantenimiento</TableColumn> */
}

{
  /* Datos de instalacion */
}
{
  /* <TableColumn key="customerNit" className="text-black text-base font-semibold">Edificio</TableColumn>
        <TableColumn key="commissioningDate" className="text-black text-base font-semibold">Fecha puesto en marcha</TableColumn>
        <TableColumn key="lastInspectionDate" className="text-black text-base font-semibold">Última inspección</TableColumn> */
}

{
  /* Datos de la inspeccion */
}

{
  /* Caracteristicas tecnicas */
}
{
  /* <TableColumn key="driveType" className="text-black text-base font-semibold">Tipo de accionamiento</TableColumn>
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
        <TableColumn key="bufferType" className="text-black text-base font-semibold">Tipo de buffer</TableColumn> */
}
