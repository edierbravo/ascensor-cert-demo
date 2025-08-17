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
import { useTechnician } from "../../hooks/useTechnician";

export const TechnicianMain = () => {
  const { technicians } = useTechnician();
  const [items, setItems] = useState([]);
  const isLoading = false; 
  const loadingState = isLoading || technicians?.length === 0 ? "loading" : "idle";

  return (
    <>
      <Table
      aria-label="Example table with client async pagination"
      bottomContent={
       <Paginator 
         items={items}
         setItems={setItems}
         data={technicians}
       />
      }
       classNames={{
        base: "",
        table: "",
      }}
    >
      <TableHeader>
        <TableColumn key="id">Cedula</TableColumn>
        <TableColumn key="name">Nombre</TableColumn>
        <TableColumn key="tel">Telefono</TableColumn>
        <TableColumn key="email">Correo</TableColumn>
        <TableColumn key="city">Ciudad</TableColumn>
        <TableColumn key="region">Región</TableColumn>
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
