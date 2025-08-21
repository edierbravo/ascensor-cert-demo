import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { HiDotsVertical } from "react-icons/hi";
import { ElevatorDetailModal } from "./elevators/ElevatorDetailModal";

export const ActionsDropdown = ({ actionList, handleActionSelected }) => {

  const onClick = (actionKey) => {
    handleActionSelected(actionKey);
  };

  return (
    <div className="relative flex justify-center items-center gap-2">
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly radius="full" size="lg" variant="light">
            <HiDotsVertical className="text-default-400" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          {actionList.map((action) => (
            <DropdownItem
              key={action.key}
              onClick={() => onClick(action.key)}
              classNames={{
                title: `${
                  action.danger ? "text-red-600 hover:text-red-700" : ""
                }`,
              }}
            >
              {action.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
