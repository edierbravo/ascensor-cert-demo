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
import { useElevator } from "../../hooks/useElevator";
import { useCustomer } from "../../hooks/useCustomer";
import { useEvaluation } from "../../hooks/useEvaluation";
import { CustomerSummary } from "../customers/customerSummary";
import { ElevatorSummary } from "../elevators/ElevatorSummary";
import { FindingsSummary } from "../items/findingsSummary";
import { ActionsDropdown } from "../ActionsDropdown";
import { ElevatorDetailModal } from "../elevators/ElevatorDetailModal";
import { CustomerDetailModal } from "../customers/CustomerDetailModal";
import { EvaluationListModal } from "./EvaluationListModal";
import { TopContent } from "../TopContent";

export const InspectionMain = () => {
  const { inspections } = useInspection();
  const [items, setItems] = useState([]);
  const { handlerElevatorSelected } = useElevator();
  const { handlerCustomerSelected } = useCustomer();
  const { handlerEvaluationsSelected } = useEvaluation();
  const isLoading = false;
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
  const {
    isOpen: isOpenEvaluationsModal,
    onOpen: onOpenEvaluatiosModal,
    onClose: onCloseEvaluationsModal,
  } = useDisclosure();
  const loadingState =
    isLoading || inspections?.length === 0 ? "loading" : "idle";
  const actionList = [
    { key: "customerDetails", label: "Detalles del cliente", danger: false },
    { key: "elevatorDetails", label: "Detalles del ascensor", danger: false },
    { key: "evaluations", label: "Evaluaciones y Hallazgos", danger: false },
    { key: "edit", label: "Editar", danger: false },
    { key: "delete", label: "Eliminar", danger: true },
  ];

  const handleActionSelected = (actionKey, item) => {
    switch (actionKey) {
      case "elevatorDetails":
        handlerElevatorSelected(item.elevatorId);
        onOpenElevatorModal();
        break;
      case "customerDetails":
        handlerCustomerSelected(item.customerNit);
        onOpenCustomerModal();
        break;
      case "evaluations":
        handlerEvaluationsSelected(item.evaluations);
        onOpenEvaluatiosModal();
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


  const bottomContent = React.useMemo(() => {
    return (
      <>
        <Paginator items={items} setItems={setItems} data={inspections} />
      </>
    );
  });

  // const elevatorDetailContent = React.useMemo(() => {
  //   return <ElevatorDetailModal isOpenElevatorModal={isOpenElevatorModal} onCloseElevatorModal={onCloseElevatorModal} />;
  // }, [isOpenElevatorModal, actionSelected]);

  return (
    <>
      <Card className="">
        <CardBody className="p-1">
          <Table
            isHeaderSticky
            isStriped
            aria-label="Tabla de Inspecciones"
            topContent={<TopContent/>}
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

      <ElevatorDetailModal
        isOpen={isOpenElevatorModal}
        onClose={onCloseElevatorModal}
      />
      <CustomerDetailModal
        isOpen={isOpenCustomerModal}
        onClose={onCloseCustomerModal}
      />
      <EvaluationListModal
        isOpen={isOpenEvaluationsModal}
        onClose={onCloseEvaluationsModal}
      />
    </>
  );
};
