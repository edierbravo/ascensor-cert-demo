import React from "react";
import {
  Chip, 
  Avatar,
} from "@heroui/react"

export const defectItems = [
  {
    code: "L",
    label: "Leve",
    color: "bg-yellow-300",
    colorIcon: "bg-yellow-500",
  },
  {
    code: "G",
    label: "Grave",
    color: "bg-orange-300",
    colorIcon: "bg-orange-500",
  },
  {
    code: "MG",
    label: "Muy Grave",
    color: "bg-red-300",
    colorIcon: "bg-red-500",
  },
];

export const getInitials = (label) => {
  return label
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}; 

export const DefectItemsDescription = () => {
    return (
        <div className="flex gap-1 m-0 p-0">
          {defectItems.map((defect) => (
            <Chip
              key={defect.code}
              avatar={
                <Avatar
                  getInitials={(name) => getInitials(name)}
                  name={defect.label}
                  size="md"
                  classNames={{
                    base: `${defect.colorIcon} text-black`
                  }}
                />
              }
              variant="flat"
              size="lg"
              className={`${defect.color} text-black`}
            >
              {defect.label}
            </Chip>
          ))}
        </div>
    )
}