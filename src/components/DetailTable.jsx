import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { getIconByBolean } from "../utils/utils";

export const DetailTable = ({ keys, labels, data }) => {
  console.log("data: ", data, keys, labels);
  return (
    <Table
      aria-label="Detail Table"
      isStriped
      isHeaderSticky
      removeWrapper
      className="max-h-[40vh] min-h-[40vh] overflow-y-auto px-2 py-0 m-2"
    >
      <TableHeader className="bg-red-600">
        <TableColumn className="text-stone-800 text-lg font-semibold">
          Característica
        </TableColumn>
        <TableColumn className="text-stone-800 text-lg font-semibold">
          Valor
        </TableColumn>
      </TableHeader>

      <TableBody>
        {keys.map((key) => (
          <TableRow key={key}>
            <TableCell className="font-semibold capitalize text-base">
              {labels[key].description}
            </TableCell>
            <TableCell className="text-base">
              {typeof data[key] == "boolean"
                ? getIconByBolean(data[key])
                : data[key]}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
