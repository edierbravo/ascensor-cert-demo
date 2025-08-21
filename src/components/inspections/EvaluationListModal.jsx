import {
  Alert,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tabs,
  Tab,
  Button,
  Listbox,
  ListboxItem,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { useElevator } from "../../hooks/useElevator";
import { DetailTable } from "../DetailTable";
import { div } from "framer-motion/client";
import { useEvaluation } from "../../hooks/useEvaluation";
import { ItemDetail } from "../items/ItemDetail";

export const tabs = [
  { key: "evaluations", title: "Evaluaciones" },
  { key: "findings", title: "Hallazgos" },
];

const labels = {
  item: { description: "Item", section: "general" },
  status: { description: "Estado", section: "general" },
  observation: { description: "Observación", section: "general" },
  corrected: { description: "Corregido", section: "general" },
};

export const EvaluationListModal = ({ isOpen, onClose }) => {
  const { evaluationsSelected, handlerEvaluationSelectedById } =
    useEvaluation();
  const [seccionSelected, setSeccionSelected] = useState(tabs[0].key);
  const [itemSelected, setItemSelected] = useState(0);
  //   const [evaluation, setEvaluation] = useState({});
  const [statusSelected, setEstatusSelected] = useState(
    seccionSelected != "findings" || false
  );

  useEffect(() => {
    setEstatusSelected(seccionSelected != "findings" || false);

    console.log(
      "itemSelected, SeccionSelected, statusSelected: ",
      itemSelected,
      seccionSelected,
      statusSelected
    );
    handlerEvaluationSelectedById(itemSelected);
    // setEvaluation(evaluationsSelected.find((item) => item.id == itemSelected));
  }, [, itemSelected, seccionSelected]);

  useEffect(() => {
    setEstatusSelected(seccionSelected != "findings" || false);
    setItemSelected(0);
  }, [, seccionSelected]);

  return (
    <Modal
      isOpen={isOpen}
      size={"xl"}
      onClose={onClose}
      placement="center"
      className=" min-h-[50vh] max-h-[80vh]"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-black font-bold text-xl">
              <p className="pt-3 pl-2">Evaluaciones y Hallazgos</p>
            </ModalHeader>
            <ModalBody className="text-lg">
              <Tabs
                aria-label="Tabs radius"
                size={"xl"}
                radius={"full"}
                variant="solid"
                selectedKey={seccionSelected}
                onSelectionChange={setSeccionSelected}
                classNames={{
                  tabContent:
                    "text-stone-600 group-data-[selected=true]:text-white text-lg",
                  cursor: "bg-stone-500 text-white",
                  tabList: `
                        gap-1 rounded-xl w-full px-1 py-1
                        grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))]
                        sm:flex
                        `,
                }}
              >
                {tabs.map((tab) => (
                  <Tab key={tab.key} title={tab.title} />
                ))}
              </Tabs>

              <div className="flex flex-col">
                <div className="flex gap-2 py-2 overflow-x-auto flex-nowrap px-2">
                  {evaluationsSelected.map((evaluation, idx) =>
                    evaluation.status == statusSelected ? (
                      <button
                        key={evaluation.id}
                        onClick={() => setItemSelected(evaluation.id)}
                        className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold transition 
                        ${
                          itemSelected == evaluation.id
                            ? "bg-green-600 text-white shadow-lg scale-105"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        {evaluation.item}
                      </button>
                    ) : null
                  )}
                </div>

                <ItemDetail />
              </div>
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
  );
};
