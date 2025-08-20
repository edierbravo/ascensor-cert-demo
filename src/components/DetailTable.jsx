import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
export const DetailTable = ({ keys, labels, data }) => {
  return (
    <Table
      aria-label="Detail Table"
      isStriped
      isHeaderSticky
      removeWrapper
      className="max-h-[40vh] min-h-[40vh] overflow-y-auto p-2 m-2"
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
            <TableCell className="text-base">{data[key]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
