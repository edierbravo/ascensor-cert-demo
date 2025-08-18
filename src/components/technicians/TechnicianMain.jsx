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
import { useTechnician } from "../../hooks/useTechnician";

export const TechnicianMain = () => {
  const { technicians } = useTechnician();
  const [items, setItems] = useState([]);
  const isLoading = false;
  const loadingState =
    isLoading || technicians?.length === 0 ? "loading" : "idle";

  return (
    <>
      <Card className="">
        <CardBody className="p-1">
          <Table
            isHeaderSticky
            isStriped
            aria-label="Example table with client async pagination"
            // bottomContent={
            // <Paginator items={items} setItems={setItems} data={technicians} />
            // }
            shadow="none"
            className="max-h-[70vh] overflow-y-auto p-1"
          >
            <TableHeader>
              <TableColumn
                key="id"
                className="text-black text-base font-semibold"
              >
                Cedula
              </TableColumn>
              <TableColumn
                key="name"
                className="text-black text-base font-semibold"
              >
                Nombre
              </TableColumn>
              <TableColumn
                key="tel"
                className="text-black text-base font-semibold"
              >
                Telefono
              </TableColumn>
              <TableColumn
                key="email"
                className="text-black text-base font-semibold"
              >
                Correo
              </TableColumn>
              <TableColumn
                key="city"
                className="text-black text-base font-semibold"
              >
                Ciudad
              </TableColumn>
              <TableColumn
                key="region"
                className="text-black text-base font-semibold"
              >
                Región
              </TableColumn>
            </TableHeader>
            <TableBody
              items={items}
              loadingContent={<Spinner />}
              loadingState={loadingState}
            >
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>

          <Paginator items={items} setItems={setItems} data={technicians} />
        </CardBody>
      </Card>
    </>
  );
};
