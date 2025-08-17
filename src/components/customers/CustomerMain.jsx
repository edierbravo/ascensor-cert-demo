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
import { useCustomer } from "../../hooks/useCustomer";
import {DropdownElevators} from "./DropdownElevators";

export const CustomerMain = () => {
  const { customers } = useCustomer();
  const [items, setItems] = useState([]);
  const isLoading = false; 
  const loadingState = isLoading || customers?.length === 0 ? "loading" : "idle";

  return (
    <>
      <Table
      aria-label="Example table with client async pagination"
      bottomContent={
       <Paginator 
         items={items}
         setItems={setItems}
         data={customers}
       />
      }
       classNames={{
        base: "",
        table: "",
      }}
    >
      <TableHeader>
        <TableColumn key="name">Nombre</TableColumn>
        <TableColumn key="nit">Nit</TableColumn>
        <TableColumn key="buildingType">Tipo construcción</TableColumn>
        <TableColumn key="address">Dirección</TableColumn>
        <TableColumn key="administrator">Administrador</TableColumn>
        <TableColumn key="email">Correo</TableColumn>
        <TableColumn key="phone">Teléfono</TableColumn>
        <TableColumn key="elevators">Elevadores</TableColumn>
      </TableHeader>
       <TableBody items={items}
        loadingContent={<Spinner />}
        loadingState={loadingState}
       >
        {(item) => (
          <TableRow key={item.nit}>
            {(columnKey) => (
              <TableCell>
                {columnKey === "elevators" ? (
                  <DropdownElevators item={item} />
                ) : (
                  getKeyValue(item, columnKey)
                )}
              </TableCell>
            )}
          </TableRow>
        )}




      </TableBody>
    </Table>
    </>
  );
};
