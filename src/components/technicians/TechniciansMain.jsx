import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { useTechnicians } from "../../hooks/useTechnicians";

export const TechniciansMain = () => {
  const { technicians } = useTechnicians();

  console.log(technicians[1], technicians.length);

  return (
    <>
      <Table
        isStriped
        className="rounded-none"
        aria-label="Example static collection table"
      >
        <TableHeader className="roundedjj">
          <TableColumn className="font-black">Cedula</TableColumn>
          <TableColumn>Nombre</TableColumn>
          <TableColumn>Telefono</TableColumn>
          <TableColumn>Correo</TableColumn>
          <TableColumn>Región</TableColumn>
          <TableColumn>Ciudad</TableColumn>
        </TableHeader>
        <TableBody items={technicians}>
          {(technician) => (
            <TableRow key={technician.id}>
              <TableCell>{technician.id}</TableCell>
              <TableCell>{technician.name}</TableCell>
              <TableCell>{technician.tel}</TableCell>
              <TableCell>{technician.email}</TableCell>
              <TableCell>{technician.region}</TableCell>
              <TableCell>{technician.city}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};
