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
  Card,
  CardBody,
} from "@heroui/react";
import { Paginator } from "../Paginator";
import { useCustomer } from "../../hooks/useCustomer";
import { DropdownElevators } from "./DropdownElevators";

export const CustomerMain = () => {
  const { customers } = useCustomer();
  const [items, setItems] = useState([]);
  const isLoading = false;
  const loadingState =
    isLoading || customers?.length === 0 ? "loading" : "idle";

  return (
    <>
      <Card className="">
        <CardBody className="p-1">
          <Table
            isStriped
            isHeaderSticky
            aria-label="Example table with client async pagination"
            // bottomContent={
        //   <Paginator items={items} setItems={setItems} data={customers} />
        // }
        className="max-h-[70vh] overflow-y-auto p-1"
        shadow="none"
      >
        <TableHeader>
          <TableColumn
            key="name"
            className="text-black text-base font-semibold"
          >
            Nombre
          </TableColumn>
          <TableColumn key="nit" className="text-black text-base font-semibold">
            Nit
          </TableColumn>
          <TableColumn
            key="buildingType"
            className="text-black text-base font-semibold"
          >
            Tipo construcción
          </TableColumn>
          <TableColumn
            key="address"
            className="text-black text-base font-semibold"
          >
            Dirección
          </TableColumn>
          <TableColumn
            key="administrator"
            className="text-black text-base font-semibold"
          >
            Administrador
          </TableColumn>
          <TableColumn
            key="email"
            className="text-black text-base font-semibold"
          >
            Correo
          </TableColumn>
          <TableColumn
            key="phone"
            className="text-black text-base font-semibold"
          >
            Teléfono
          </TableColumn>
          <TableColumn
            key="elevators"
            className="text-black text-base font-semibold"
          >
            Elevadores
          </TableColumn>
        </TableHeader>
        <TableBody
          items={items}
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

      <Paginator items={items} setItems={setItems} data={customers} />

      </CardBody>
      </Card>
    </>
  );
};
