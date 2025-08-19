import { createSlice } from "@reduxjs/toolkit";

const inspectionsList = [
  {
    "id": 1,
    "customerNit": 901000002,
    "quotation": 7001,
    "uniqueConsecutive": "A7001",
    "evaluaciones": [
      { "id": 1, "item": 1, "estado": false, "observacion": "", "corregido": true },
      { "id": 2, "item": 2, "estado": true, "observacion": "", "corregido": true },
      { "id": 3, "item": 3, "estado": false, "observacion": "", "corregido": false }
    ]
  },
  {
    "id": 2,
    "customerNit": 901000004,
    "quotation": 7002,
    "uniqueConsecutive": "A7002",
    "evaluaciones": [
      { "id": 4, "item": 4, "estado": false, "observacion": "", "corregido": false },
      { "id": 5, "item": 5, "estado": false, "observacion": "", "corregido": true },
      { "id": 6, "item": 6, "estado": true, "observacion": "", "corregido": true }
    ]
  },
  {
    "id": 3,
    "customerNit": 901000004,
    "quotation": 7003,
    "uniqueConsecutive": "A7003",
    "evaluaciones": [
      { "id": 7, "item": 7, "estado": false, "observacion": "", "corregido": false },
      { "id": 8, "item": 8, "estado": false, "observacion": "", "corregido": true },
      { "id": 9, "item": 9, "estado": false, "observacion": "", "corregido": false }
    ]
  },
  {
    "id": 4,
    "customerNit": 901000006,
    "quotation": 7004,
    "uniqueConsecutive": "A7004",
    "evaluaciones": [
      { "id": 10, "item": 10, "estado": false, "observacion": "", "corregido": false },
      { "id": 11, "item": 11, "estado": true, "observacion": "", "corregido": true },
      { "id": 12, "item": 12, "estado": false, "observacion": "", "corregido": false }
    ]
  },
  {
    "id": 5,
    "customerNit": 901000007,
    "quotation": 7005,
    "uniqueConsecutive": "A7005",
    "evaluaciones": [
      { "id": 13, "item": 13, "estado": false, "observacion": "", "corregido": true },
      { "id": 14, "item": 14, "estado": false, "observacion": "", "corregido": true },
      { "id": 15, "item": 15, "estado": false, "observacion": "", "corregido": false }
    ]
  },
  {
    "id": 6,
    "customerNit": 901000009,
    "quotation": 7006,
    "uniqueConsecutive": "A7006",
    "evaluaciones": [
      { "id": 16, "item": 16, "estado": true, "observacion": "", "corregido": true },
      { "id": 17, "item": 17, "estado": false, "observacion": "", "corregido": true },
      { "id": 18, "item": 18, "estado": false, "observacion": "", "corregido": true }
    ]
  },
  {
    "id": 7,
    "customerNit": 901000010,
    "quotation": 7007,
    "uniqueConsecutive": "A7007",
    "evaluaciones": [
      { "id": 19, "item": 19, "estado": true, "observacion": "", "corregido": true },
      { "id": 20, "item": 20, "estado": true, "observacion": "", "corregido": true },
      { "id": 21, "item": 21, "estado": false, "observacion": "", "corregido": true }
    ]
  },
  {
    "id": 8,
    "customerNit": 901000011,
    "quotation": 7008,
    "uniqueConsecutive": "A7008",
    "evaluaciones": [
      { "id": 22, "item": 21, "estado": true, "observacion": "", "corregido": true },
      { "id": 23, "item": 22, "estado": false, "observacion": "", "corregido": true },
      { "id": 24, "item": 23, "estado": false, "observacion": "", "corregido": true }
    ]
  },
  {
    "id": 9,
    "customerNit": 901000012,
    "quotation": 7009,
    "uniqueConsecutive": "A7009",
    "evaluaciones": [
      { "id": 25, "item": 11, "estado": true, "observacion": "", "corregido": true },
      { "id": 26, "item": 12, "estado": true, "observacion": "", "corregido": true },
      { "id": 27, "item": 13, "estado": false, "observacion": "", "corregido": true }
    ]
  },
  {
    "id": 10,
    "customerNit": 901000013,
    "quotation": 7010,
    "uniqueConsecutive": "A7010",
    "evaluaciones": [
      { "id": 28, "item": 11, "estado": false, "observacion": "", "corregido": true },
      { "id": 29, "item": 20, "estado": true, "observacion": "", "corregido": true },
      { "id": 30, "item": 30, "estado": false, "observacion": "", "corregido": true }
    ]
  },
  {
    "id": 11,
    "customerNit": 901000014,
    "quotation": 7011,
    "uniqueConsecutive": "A7011",
    "evaluaciones": [
      { "id": 31, "item": 1, "estado": false, "observacion": "", "corregido": true },
      { "id": 32, "item": 2, "estado": false, "observacion": "", "corregido": true },
      { "id": 33, "item": 30, "estado": true, "observacion": "", "corregido": true }
    ]
  },
  {
    "id": 12,
    "customerNit": 901000015,
    "quotation": 7012,
    "uniqueConsecutive": "A7012",
    "evaluaciones": [
      { "id": 34, "item": 1, "estado": false, "observacion": "", "corregido": false },
      { "id": 35, "item": 23, "estado": false, "observacion": "", "corregido": true },
      { "id": 36, "item": 31, "estado": false, "observacion": "", "corregido": true }
    ]
  },
  {
    "id": 13,
    "customerNit": 901000016,
    "quotation": 7013,
    "uniqueConsecutive": "A7013",
    "evaluaciones": [
      { "id": 37, "item": 16, "estado": false, "observacion": "", "corregido": true },
      { "id": 38, "item": 2, "estado": false, "observacion": "", "corregido": true },
      { "id": 39, "item": 30, "estado": false, "observacion": "", "corregido": true }
    ]
  },
  {
    "id": 14,
    "customerNit": 901000017,
    "quotation": 7014,
    "uniqueConsecutive": "A7014",
    "evaluaciones": [
      { "id": 40, "item": 15, "estado": false, "observacion": "", "corregido": false },
      { "id": 41, "item": 28, "estado": false, "observacion": "", "corregido": false },
      { "id": 42, "item": 3, "estado": false, "observacion": "", "corregido": false }
    ]
  },
  {
    "id": 15,
    "customerNit": 901000018,
    "quotation": 7015,
    "uniqueConsecutive": "A7015",
    "evaluaciones": [
      { "id": 43, "item": 1, "estado": false, "observacion": "", "corregido": false },
      { "id": 44, "item": 29, "estado": false, "observacion": "", "corregido": false },
      { "id": 45, "item": 23, "estado": false, "observacion": "", "corregido": false }
    ]
  },
  {
    "id": 16,
    "customerNit": 901000019,
    "quotation": 7016,
    "uniqueConsecutive": "A7016",
    "evaluaciones": [
      { "id": 46, "item": 19, "estado": true, "observacion": "", "corregido": true },
      { "id": 47, "item": 2, "estado": true, "observacion": "", "corregido": true },
      { "id": 48, "item": 36, "estado": false, "observacion": "", "corregido": false }
    ]
  },
  {
    "id": 18,
    "customerNit": 901000001,
    "quotation": 7017,
    "uniqueConsecutive": "A7017",
    "evaluaciones": [
      { "id": 49, "item": 11, "estado": false, "observacion": "", "corregido": true },
      { "id": 50, "item": 22, "estado": true, "observacion": "", "corregido": true },
      { "id": 51, "item": 33, "estado": true, "observacion": "", "corregido": true }
    ]
  },
  {
    "id": 19,
    "customerNit": 901000002,
    "quotation": 7018,
    "uniqueConsecutive": "A7018",
    "evaluaciones": [
      { "id": 52, "item": 1, "estado": true, "observacion": "", "corregido": true },
      { "id": 53, "item": 2, "estado": false, "observacion": "", "corregido": false },
      { "id": 54, "item": 35, "estado": false, "observacion": "", "corregido": false }
    ]
  },
  {
    "id": 20,
    "customerNit": 901000003,
    "quotation": 7019,
    "uniqueConsecutive": "A7019",
    "evaluaciones": [
      { "id": 55, "item": 1, "estado": true, "observacion": "", "corregido": true },
      { "id": 56, "item": 28, "estado": false, "observacion": "", "corregido": true },
      { "id": 57, "item": 3, "estado": true, "observacion": "", "corregido": true }
    ]
  },
  {
    "id": 21,
    "customerNit": 901000003,
    "quotation": 7020,
    "uniqueConsecutive": "A7020",
    "evaluaciones": [
      { "id": 58, "item": 1, "estado": false, "observacion": "", "corregido": true },
      { "id": 59, "item": 2, "estado": true, "observacion": "", "corregido": true },
      { "id": 60, "item": 31, "estado": true, "observacion": "", "corregido": true }
    ]
  },
  {
    "id": 22,
    "customerNit": 901000004,
    "quotation": 7021,
    "uniqueConsecutive": "A7021",
    "evaluaciones": [
      { "id": 61, "item": 17, "estado": false, "observacion": "", "corregido": false },
      { "id": 62, "item": 2, "estado": false, "observacion": "", "corregido": false },
      { "id": 63, "item": 3, "estado": false, "observacion": "", "corregido": false }
    ]
  }
]


export const InspectionSlice = createSlice({
  name: "inspections",
  initialState: {
    inspections: inspectionsList,
  },

  reducers: {
    setInspections: (state, action) => {
      state.inspections = action.payload;
    },
  },
});

export const { 
    setInspections
} = InspectionSlice.actions;

