import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
  getKeyValue,
  Select,
  SelectItem,
} from "@heroui/react";
import { Paginator } from "../Paginator";
import { useTechnicians } from "../../hooks/useTechnicians";

export const numRows =[
  {key: 5, label: "5"},
  {key: 10, label: "10"},
  {key: 20, label: "20"},
  {key: 50, label: "50"},
  {key: 100, label: "100"}
]

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const TechniciansMain = () => {
  const { technicians } = useTechnicians();
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
