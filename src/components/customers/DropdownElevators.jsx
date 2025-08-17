import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button
} from "@heroui/react";

export const DropdownElevators = ({ item }) => {
return (
    <Dropdown>
        <DropdownTrigger>
            {item?.elevators?.length > 0 ? (
            <Button className="bg-green-600 text-white">
                Mostrar ({item.elevators.length})
            </Button>
            ) : (
            <Button className="bg-blue-600 text-white">
                Añadir nuevo
            </Button>
            )}
        </DropdownTrigger>
        {item.elevators.length > 0 && (
            <DropdownMenu aria-label="Lista de ascensores">
            {item.elevators.map((e, index) => (
                <DropdownItem
                key={index}
                textValue={`${e.id} - ${e.brand}`}
                >
                {e.id} - {e.brand}
                </DropdownItem>
            ))}
            <DropdownItem key="add" textValue="Añadir nuevo">
                <Button className="w-full bg-blue-600 text-white">
                Añadir nuevo
                </Button>
            </DropdownItem>
            </DropdownMenu>
        )}
    </Dropdown>
)
}