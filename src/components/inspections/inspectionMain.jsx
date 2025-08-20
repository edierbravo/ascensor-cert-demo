import React, { useEffect, useState } from "react";
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
  useDisclosure,
} from "@heroui/react";
import { Paginator } from "../Paginator";
import { IoMdAddCircle } from "react-icons/io";
import { useInspection } from "../../hooks/useInspection";
import { ElevatorDetail } from "../elevators/ElevatorDetail";
import { useElevator } from "../../hooks/useElevator";
import { CustomerSummary } from "../customers/customerSummary";
import { ElevatorSummary } from "../elevators/ElevatorSummary";
import { FindingsSummary } from "../items/findingsSummary";
import { ActionsDropdown } from "../ActionsDropdown";
import { ElevatorDetailModal } from "../elevators/ElevatorDetailModal";

export const InspectionMain = () => {
  const { inspections } = useInspection();
  const [items, setItems] = useState([]);
  const { handlerElevatorSelected } = useElevator();
  const isLoading = false;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const loadingState =
    isLoading || inspections?.length === 0 ? "loading" : "idle";
  const actionList = [
    { key: "customerDetails", label: "Detalles del cliente", danger: false },
    { key: "elevatorDetails", label: "Detalles del ascensor", danger: false },
    { key: "edit", label: "Editar", danger: false },
    { key: "delete", label: "Eliminar", danger: true },
  ];

  const handleActionSelected = (actionKey, item) => {
    switch (actionKey) {
      case "elevatorDetails":
        handlerElevatorSelected(item.elevatorId);
        onOpen();
        break;
      case "customerDetails":
        // manejar detalles del cliente
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
        <Paginator items={items} setItems={setItems} data={inspections} />
      </>
    );
  });

  // const elevatorDetailContent = React.useMemo(() => {
  //   return <ElevatorDetailModal isOpen={isOpen} onClose={onClose} />;
  // }, [isOpen, actionSelected]);

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <Card className="">
        <CardBody className="p-1">
          <Table
            isHeaderSticky
            isStriped
            aria-label="Tabla de Inspecciones"
            topContent={topContent}
            topContentPlacement="outside"
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            shadow="none"
            className="max-h-[70vh] overflow-y-auto p-1 gap-2"
          >
            <TableHeader>
              <TableColumn
                key="customerSummary"
                className="text-black text-base font-semibold"
              >
                Cliente
              </TableColumn>
              <TableColumn
                key="elevatorSummary"
                className="text-black text-base font-semibold"
              >
                Ascensor
              </TableColumn>
              <TableColumn
                key="quotation"
                className="text-black text-base font-semibold"
              >
                Cotizacion
              </TableColumn>
              <TableColumn
                key="uniqueConsecutive"
                className="text-black text-base font-semibold"
              >
                Consecutivo
              </TableColumn>
              <TableColumn
                key="findingsSummary"
                className="text-black text-base font-semibold"
              >
                Hallazgos
              </TableColumn>

              <TableColumn
                key="actions"
                className="text-black text-base font-semibold"
              >
                Acciones
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
                    <TableCell>
                      {(() => {
                        switch (columnKey) {
                          case "elevatorId":
                            return (
                              <ElevatorDetail elevatorId={item.elevatorId} />
                            );

                          case "customerSummary":
                            return (
                              <CustomerSummary customerNit={item.customerNit} />
                            );

                          case "elevatorSummary":
                            return (
                              <ElevatorSummary elevatorId={item.elevatorId} />
                            );

                          case "findingsSummary":
                            return (
                              <FindingsSummary
                                currentFindings={item.evaluations}
                              />
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

      <ElevatorDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
