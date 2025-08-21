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
import { useElevator } from "../../hooks/useElevator";
import { useCustomer } from "../../hooks/useCustomer";
import { FaSort } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoMdAddCircle } from "react-icons/io";
import { ActionsDropdown } from "../ActionsDropdown";
import { ElevatorDetailModal } from "./ElevatorDetailModal";
import { CustomerSummary } from "../customers/customerSummary";
import { CustomerDetailModal } from "../customers/CustomerDetailModal";

const INITIAL_VISIBLE_COLUMNS = [
  "serialNumber",
  "elevatorCode",
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
  const {
    isOpen: isOpenElevatorModal,
    onOpen: onOpenElevatorModal,
    onClose: onCloseElevatorModal,
  } = useDisclosure();
  const {
    isOpen: isOpenCustomerModal,
    onOpen: onOpenCustomerModal,
    onClose: onCloseCustomerModal,
  } = useDisclosure();
  const { handlerCustomerSelected } = useCustomer();
  const { handlerElevatorSelected } = useElevator();
  const isLoading = false;
  const hasSearchFilter = Boolean(filterValue);
  const loadingState =
    isLoading || elevators?.length === 0 ? "loading" : "idle";
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "name",
    direction: "ascending",
  });
  const actionList = [
    { key: "elevatorDetails", label: "Detalles del ascensor", danger: false },
    { key: "customerDetails", label: "Detalles del cliente", danger: false },
    { key: "edit", label: "Editar", danger: false },
    { key: "delete", label: "Eliminar", danger: true },
  ];

  const handleActionSelected = (actionKey, item) => {
    switch (actionKey) {
      case "elevatorDetails":
        handlerElevatorSelected(item.id);
        onOpenElevatorModal();
        break;
      case "customerDetails":
        handlerCustomerSelected(item.customerNit);
        onOpenCustomerModal();
        break;
      case "edit":
        // editar
        break;
      case "delete":
        // eliminar
        break;
      default:
        break;
    }
  };

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
            className="bg-blue-600 text-background"
            endContent={<IoMdAddCircle />}
            size="lg"
          >
            Agregar
          </Button>
        </div>
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
            className="max-h-[70vh] overflow-y-auto p-1"
            shadow="none"
            topContent={topContent}
            topContentPlacement="outside"
            // bottomContent={bottomContent}
            bottomContent={
              <Paginator items={items} setItems={setItems} data={elevators} />
            }
            bottomContentPlacement="outside"
          >
            <TableHeader>
              {/* Datos de identificacion */}
              <TableColumn
                key="customerNit"
                className="text-black text-base font-semibold"
                allowsSorting
              >
                Cliente
              </TableColumn>
              <TableColumn
                key="serialNumber"
                className="text-black text-base font-semibold"
                allowsSorting
              >
                Numero de serie
              </TableColumn>
              <TableColumn
                key="elevatorCode"
                className="text-black text-base font-semibold"
                allowsSorting
              >
                Número de ascensor
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
                allowsSorting
              >
                Fabricante
              </TableColumn>
              <TableColumn
                key="actions"
                className="text-black text-base font-semibold"
              >
                Acciones
              </TableColumn>
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
                      {(() => {
                        switch (columnKey) {
                          case "customerNit":
                            return (
                              <CustomerSummary customerNit={item.customerNit} />
                            );

                          case "actions":
                            return (
                              <>
                                <ActionsDropdown
                                  actionList={actionList}
                                  handleActionSelected={(actionKey) =>
                                    handleActionSelected(actionKey, item)
                                  }
                                />
                              </>
                            );

                          default:
                            return getKeyValue(item, columnKey);
                        }
                      })()}
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardBody>
      </Card>

      <ElevatorDetailModal
        isOpen={isOpenElevatorModal}
        onClose={onCloseElevatorModal}
      />
      <CustomerDetailModal
        isOpen={isOpenCustomerModal}
        onClose={onCloseCustomerModal}
      />
    </>
  );
};
