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
import { DefectItemsDescription } from "./DefectItemsDescription";
import { ActionsDropdown } from "../ActionsDropdown";
import {TopContent} from "../TopContent"

const actionList = [
  { key: "edit", label: "Editar", danger: false },
  { key: "delete", label: "Eliminar", danger: true },
];

export const ItemMain = () => {
  const { inspectionItems } = useItem();
  const [items, setItems] = useState([]);
  const isLoading = false;
  const loadingState =
    isLoading || inspectionItems?.length === 0 ? "loading" : "idle";

  const handleActionSelected = (actionKey, item) => {
    switch (actionKey) {
      case "edit":
        // edit
        break;
      case "delete":
        // delete
        break;
      default:
        break;
    }
  };

  const bottomContent = React.useMemo(() => {
    return (
      <>
        <DefectItemsDescription />
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
            topContent={<TopContent />}
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
    </>
  );
};
