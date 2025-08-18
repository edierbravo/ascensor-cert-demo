import { Pagination, Select, SelectItem } from "@heroui/react";
import { useState, useEffect } from "react";

export const numRows = [
  { key: 5, label: "5" },
  { key: 10, label: "10" },
  { key: 20, label: "20" },
  { key: 50, label: "50" },
  { key: 100, label: "100" },
];

export const Paginator = ({ items, setItems, data }) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(numRows?.[0]?.key || 10);
  const [pages, setPages] = useState(1);

  const onRowsPerPageChange = ({ target }) => {
    const { name, value } = target;
    // console.log("Rows per page changed: ", value);
    setRowsPerPage(Number(value) || 5);
    setPage(1);
  };

  useEffect(() => {
    setPages(Math.ceil(data.length / rowsPerPage));
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    // console.log("Pages: ", page, start, end);

    setItems(data.slice(start, end));
  }, [, page, rowsPerPage]);

  return (
    <>
      {pages > 0 ? (
        <div className="flex w-full justify-center align-center py-2 px-1">
          <Select
            className="max-w-[80px]"
            defaultSelectedKeys={[numRows[0].label]}
            label="Items"
            placeholder="Numero de items"
            radius={"full"}
            onChange={onRowsPerPageChange}
          >
            {numRows.map((item) => (
              <SelectItem key={item.key}>{item.label}</SelectItem>
            ))}
          </Select>

          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={pages}
            size="sm"
            onChange={(page) => setPage(page)}
            classNames={{
              // wrapper: "gap-0 overflow-visible h-8 rounded-sm border border-divider",
              // item: "w-8 h-8 text-small rounded-none bg-transparent",
              cursor: "bg-blue-600 ",
            }}
          />
        </div>
      ) : null}
    </>
  );
};
