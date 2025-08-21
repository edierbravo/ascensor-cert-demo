import { Input, Button } from "@heroui/react";
import { IoMdAddCircle } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

export const TopContent = () => {
  return (
    <div className="flex flex-col gap-4 text-lg">
      <div className="flex justify-center align-cente gap-3 items-center">
        <Input
          isClearable
          classNames={{
            base: "w-full sm:max-w-[44%]",
            inputWrapper: "border-1",
          }}
          placeholder="Buscar"
          size="lg"
          startContent={<FiSearch className="text-default-300" />}
          // value={filterValue}
          variant="bordered"
          // onClear={() => setFilterValue("")}
          // onValueChange={onSearchChange}
        />
        <Button
          className="bg-blue-600 text-background"
          endContent={<IoMdAddCircle className="w-6 h-6 hidden sm:flex" />}
          size="lg"
        >
          <span className="">Agregar</span>
        </Button>
      </div>
    </div>
  );
};
