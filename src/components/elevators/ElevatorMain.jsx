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
  Button,
  Card,
  CardBody,
  useDisclosure,
  Input,
} from "@heroui/react";
import { Paginator } from "../Paginator";
import { useElevator } from "../../hooks/useelevator";
import { ElevatorDetail } from "./ElevatorDetail";
import { FaSort } from "react-icons/fa6";
import { SortIcon } from "@heroui/shared-icons";
import { useAsyncList } from "@react-stately/data";
import { FiSearch } from "react-icons/fi";
import { IoMdAddCircle } from "react-icons/io";

const INITIAL_VISIBLE_COLUMNS = [
  "serialNumber",
  "elevatorId",
  "brand",
  "customerNit",
  "details",
];

export function capitalize(s) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

export const ElevatorMain = () => {
  const { elevators } = useElevator();
  const [items, setItems] = useState([]);
  const [filterValue, setFilterValue] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const isLoading = false;
  const hasSearchFilter = Boolean(filterValue);
  const loadingState =
    isLoading || elevators?.length === 0 ? "loading" : "idle";
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "name",
    direction: "ascending",
  });

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      // setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...sortedItems];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.serialNumber.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    // if (
    //   statusFilter !== "all" &&
    //   Array.from(statusFilter).length !== statusOptions.length
    // ) {
    //   filteredUsers = filteredUsers.filter((user) =>
    //     Array.from(statusFilter).includes(user.status)
    //   );
    // }

    return filteredUsers;
  }, [sortedItems, filterValue, statusFilter]);

  // const items = React.useMemo(() => {
  //   const start = (page - 1) * rowsPerPage;
  //   const end = start + rowsPerPage;

  //   return filteredItems.slice(start, end);
  // }, [page, filteredItems, rowsPerPage]);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4 text-lg">
        <div className="flex justify-center align-cente gap-3 items-center">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Buscar por Serie..."
            size="lg"
            startContent={<FiSearch className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <Button
            className="bg-foreground text-background"
            endContent={<IoMdAddCircle />}
            size="lg"
          >
            Agregar
          </Button>
        </div>
        {/* <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {elevators.length} Ascensores
          </span>
        </div> */}
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    elevators.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return <Paginator items={items} setItems={setItems} data={elevators} />;
  }, [items.length, hasSearchFilter, sortedItems]);

  return (
    <>
      <Card className="">
        <CardBody className="p-1">
          <Table
            isStriped
            isHeaderSticky
            sortIcon={FaSort}
            onSortChange={setSortDescriptor}
            sortDescriptor={sortDescriptor}
            aria-label="Example table with client async pagination"
            // bottomContent={
            // <Paginator items={items} setItems={setItems} data={elevators} />
            // }
            className="max-h-[70vh] overflow-y-auto p-1"
            shadow="none"
            topContent={topContent}
            topContentPlacement="outside"
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
          >
            <TableHeader>
              {/* Datos de identificacion */}
              <TableColumn
                key="serialNumber"
                className="text-black text-base font-semibold"
                allowsSorting
              >
                Numero de serie
              </TableColumn>
              <TableColumn
                key="elevatorId"
                className="text-black text-base font-semibold"
                allowsSorting
              >
                Número de ascensor
              </TableColumn>
              <TableColumn
                key="customerNit"
                className="text-black text-base font-semibold"
                allowsSorting
              >
                Edificio
              </TableColumn>
              <TableColumn
                key="brand"
                className="text-black text-base font-semibold"
                allowsSorting
              >
                Marca
              </TableColumn>
              <TableColumn
                key="manufacturer"
                className="text-black text-base font-semibold"
              >
                Fabricante
              </TableColumn>
              <TableColumn
                key="details"
                className="text-black text-base font-semibold"
              >
                Detalles
              </TableColumn>

              {/* Datos de la empresa de mantenimiento */}
              {/* <TableColumn key="maintenanceCompany" className="text-black text-base font-semibold">Empresa de mantenimiento</TableColumn>
        <TableColumn key="technicianName" className="text-black text-base font-semibold">Técnico encargado</TableColumn>
        <TableColumn key="lastMaintenanceDate" className="text-black text-base font-semibold">Fecha ultimo mantenimiento</TableColumn> */}

              {/* Datos de instalacion */}
              {/* <TableColumn key="customerNit" className="text-black text-base font-semibold">Edificio</TableColumn>
        <TableColumn key="commissioningDate" className="text-black text-base font-semibold">Fecha puesto en marcha</TableColumn>
        <TableColumn key="lastInspectionDate" className="text-black text-base font-semibold">Última inspección</TableColumn> */}

              {/* Datos de la inspeccion */}

              {/* Caracteristicas tecnicas */}
              {/* <TableColumn key="driveType" className="text-black text-base font-semibold">Tipo de accionamiento</TableColumn>
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
        <TableColumn key="bufferType" className="text-black text-base font-semibold">Tipo de buffer</TableColumn> */}
            </TableHeader>
            <TableBody
              items={sortedItems}
              loadingContent={<Spinner />}
              loadingState={loadingState}
              // isLoading={isLoadingSort}
            >
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) => (
                    <TableCell>
                      {columnKey == "details" ? (
                        <ElevatorDetail item={item} />
                      ) : (
                        getKeyValue(item, columnKey)
                      )}
                    </TableCell>
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
