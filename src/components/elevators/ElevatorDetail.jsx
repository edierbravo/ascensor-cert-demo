import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tabs,
  Tab,
} from "@heroui/react";
import { ElevatorDetailTable } from "./ElevatorDetailTable";
import React, { useState } from "react";
export const tabs = [
  { key: "general", title: "General" },
  { key: "maintenance", title: "Mantenimiento" },
  { key: "installation", title: "Instalación" },
  { key: "technical", title: "Técnicos" },
];
export const ElevatorDetail = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [seccionSelected, setSelected] = React.useState(tabs[0].key);

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <Button
        onPress={() => handleOpen()}
        className="bg-blue-600 text-white hover:bg-blue-700"
      >
        Mostrar
      </Button>
      <Modal
        isOpen={isOpen}
        size={"lg"}
        onClose={onClose}
        placement="center"
        className="z-20 min-h-[30v]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3 text-black font-bold text-xl">
                <p className="pt-3 pl-2">Detalles</p>
              </ModalHeader>
              <ModalBody className="text-lg">
                <Tabs
                  aria-label="Tabs radius"
                  size={"lg"}
                  radius={"full"}
                  variant="solid"
                  selectedKey={seccionSelected}
                  onSelectionChange={setSelected}
                  classNames={{
                    tabContent:
                      "text-stone-600 group-data-[selected=true]:text-white text-lg",
                    cursor: "bg-stone-500 text-white",
                    tabList: `
                        gap-1 rounded-xl w-full px-1 py-2
                        grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))]
                        sm:flex
                        `,
                  }}
                >
                  {tabs.map((tab) => (
                    <Tab key={tab.key} title={tab.title} />
                  ))}
                </Tabs>

                <ElevatorDetailTable
                  data={item}
                  seccionSelected={seccionSelected}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  onPress={onClose}
                  className="bg-red-600 text:white hover:bg-red-700 active:bg-red-800"
                >
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
