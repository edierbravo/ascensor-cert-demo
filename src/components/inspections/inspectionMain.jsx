import React, { useState } from "react";
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
  Button,
} from "@heroui/react";
import { Paginator } from "../Paginator";
import { useItem } from "../../hooks/useItem";
import { IoMdAddCircle } from "react-icons/io";

export const InspectionMain = () => {
  const { inspectionItems } = useItem();
  const [items, setItems] = useState([]);
  const isLoading = false;
  const loadingState =
    isLoading || inspectionItems?.length === 0 ? "loading" : "idle";

  const topContent = React.useMemo(() => {
    return (
      <div className="flex justify-center items-center mb-1 gap-3">
        <Button
          className="bg-blue-600 text-background"
          endContent={<IoMdAddCircle />}
          size="lg"
        >
          Agregar
        </Button>
      </div>
    );
  });

  const bottomContent = React.useMemo(() => {
    return (
      <>
        <Paginator items={items} setItems={setItems} data={inspectionItems} />
      </>
    );
  });

  return (
    <>
      <Card className="">
        <CardBody className="p-1">
          <Table
            isHeaderSticky
            isStriped
            aria-label="Example table with client async pagination"
            topContent={topContent}
            topContentPlacement="outside"
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            shadow="none"
            className="max-h-[70vh] overflow-y-auto p-1 gap-2"
          >
            <TableHeader>
              <TableColumn
                key="code"
                className="text-black text-base font-semibold"
              >
                Codigo
              </TableColumn>
              <TableColumn
                key="description"
                className="text-black text-base font-semibold"
              >
                Descripción
              </TableColumn>
              <TableColumn
                key="defect"
                className="text-black text-base font-semibold"
              >
                Defecto
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
        </CardBody>
      </Card>
    </>
  );
};
