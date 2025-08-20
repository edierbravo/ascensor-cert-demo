import { createSlice } from "@reduxjs/toolkit";

const inspectionsList = [
  {
    "id": 1,
    "customerNit": 901000002,
    "elevatorId": 1,
    "quotation": 7001,
    "uniqueConsecutive": "A7001",
    "evaluations": [
      { "id": 1, "item": 1, "status": false, "observation": "", "corrected": true },
      { "id": 2, "item": 2, "status": true, "observation": "", "corrected": true },
      { "id": 3, "item": 3, "status": false, "observation": "", "corrected": false }
    ]
  },
  {
    "id": 2,
    "customerNit": 901000004,
    "elevatorId": 2,
    "quotation": 7002,
    "uniqueConsecutive": "A7002",
    "evaluations": [
      { "id": 4, "item": 4, "status": false, "observation": "", "corrected": false },
      { "id": 5, "item": 5, "status": false, "observation": "", "corrected": true },
      { "id": 6, "item": 6, "status": true, "observation": "", "corrected": true }
    ]
  },
  {
    "id": 3,
    "customerNit": 901000004,
    "elevatorId": 3,
    "quotation": 7003,
    "uniqueConsecutive": "A7003",
    "evaluations": [
      { "id": 7, "item": 7, "status": false, "observation": "", "corrected": false },
      { "id": 8, "item": 8, "status": false, "observation": "", "corrected": true },
      { "id": 9, "item": 9, "status": false, "observation": "", "corrected": false }
    ]
  },
  {
    "id": 4,
    "customerNit": 901000006,
    "elevatorId": 4,
    "quotation": 7004,
    "uniqueConsecutive": "A7004",
    "evaluations": [
      { "id": 10, "item": 10, "status": false, "observation": "", "corrected": false },
      { "id": 11, "item": 11, "status": true, "observation": "", "corrected": true },
      { "id": 12, "item": 12, "status": false, "observation": "", "corrected": false }
    ]
  },
  {
    "id": 5,
    "customerNit": 901000007,
    "elevatorId": 5,
    "quotation": 7005,
    "uniqueConsecutive": "A7005",
    "evaluations": [
      { "id": 13, "item": 13, "status": false, "observation": "", "corrected": true },
      { "id": 14, "item": 14, "status": false, "observation": "", "corrected": true },
      { "id": 15, "item": 15, "status": false, "observation": "", "corrected": false }
    ]
  },
  {
    "id": 6,
    "customerNit": 901000009,
    "elevatorId": 6,
    "quotation": 7006,
    "uniqueConsecutive": "A7006",
    "evaluations": [
      { "id": 16, "item": 16, "status": true, "observation": "", "corrected": true },
      { "id": 17, "item": 17, "status": false, "observation": "", "corrected": true },
      { "id": 18, "item": 18, "status": false, "observation": "", "corrected": true }
    ]
  },
  {
    "id": 7,
    "customerNit": 901000010,
    "elevatorId": 7,
    "quotation": 7007,
    "uniqueConsecutive": "A7007",
    "evaluations": [
      { "id": 19, "item": 19, "status": true, "observation": "", "corrected": true },
      { "id": 20, "item": 20, "status": true, "observation": "", "corrected": true },
      { "id": 21, "item": 21, "status": false, "observation": "", "corrected": true }
    ]
  },
  {
    "id": 8,
    "customerNit": 901000011,
    "elevatorId": 8,
    "quotation": 7008,
    "uniqueConsecutive": "A7008",
    "evaluations": [
      { "id": 22, "item": 21, "status": true, "observation": "", "corrected": true },
      { "id": 23, "item": 22, "status": false, "observation": "", "corrected": true },
      { "id": 24, "item": 23, "status": false, "observation": "", "corrected": true }
    ]
  },
  {
    "id": 9,
    "customerNit": 901000012,
    "elevatorId": 9,
    "quotation": 7009,
    "uniqueConsecutive": "A7009",
    "evaluations": [
      { "id": 25, "item": 11, "status": true, "observation": "", "corrected": true },
      { "id": 26, "item": 12, "status": true, "observation": "", "corrected": true },
      { "id": 27, "item": 13, "status": false, "observation": "", "corrected": true }
    ]
  },
  {
    "id": 10,
    "customerNit": 901000013,
    "elevatorId": 10,
    "quotation": 7010,
    "uniqueConsecutive": "A7010",
    "evaluations": [
      { "id": 28, "item": 11, "status": false, "observation": "", "corrected": true },
      { "id": 29, "item": 20, "status": true, "observation": "", "corrected": true },
      { "id": 30, "item": 30, "status": false, "observation": "", "corrected": true }
    ]
  },
  {
    "id": 11,
    "customerNit": 901000014,
    "elevatorId": 11,
    "quotation": 7011,
    "uniqueConsecutive": "A7011",
    "evaluations": [
      { "id": 31, "item": 1, "status": false, "observation": "", "corrected": true },
      { "id": 32, "item": 2, "status": false, "observation": "", "corrected": true },
      { "id": 33, "item": 30, "status": true, "observation": "", "corrected": true }
    ]
  },
  {
    "id": 12,
    "customerNit": 901000015,
    "elevatorId": 12,
    "quotation": 7012,
    "uniqueConsecutive": "A7012",
    "evaluations": [
      { "id": 34, "item": 1, "status": false, "observation": "", "corrected": false },
      { "id": 35, "item": 23, "status": false, "observation": "", "corrected": true },
      { "id": 36, "item": 31, "status": false, "observation": "", "corrected": true }
    ]
  },
  {
    "id": 13,
    "customerNit": 901000016,
    "elevatorId": 13,
    "quotation": 7013,
    "uniqueConsecutive": "A7013",
    "evaluations": [
      { "id": 37, "item": 16, "status": false, "observation": "", "corrected": true },
      { "id": 38, "item": 2, "status": false, "observation": "", "corrected": true },
      { "id": 39, "item": 30, "status": false, "observation": "", "corrected": true }
    ]
  },
  {
    "id": 14,
    "customerNit": 901000017,
    "elevatorId": 14,
    "quotation": 7014,
    "uniqueConsecutive": "A7014",
    "evaluations": [
      { "id": 40, "item": 15, "status": false, "observation": "", "corrected": false },
      { "id": 41, "item": 28, "status": false, "observation": "", "corrected": false },
      { "id": 42, "item": 3, "status": false, "observation": "", "corrected": false }
    ]
  },
  {
    "id": 15,
    "customerNit": 901000018,
    "elevatorId": 15,
    "quotation": 7015,
    "uniqueConsecutive": "A7015",
    "evaluations": [
      { "id": 43, "item": 1, "status": false, "observation": "", "corrected": false },
      { "id": 44, "item": 29, "status": false, "observation": "", "corrected": false },
      { "id": 45, "item": 23, "status": false, "observation": "", "corrected": false }
    ]
  },
  {
    "id": 16,
    "customerNit": 901000019,
    "elevatorId": 16,
    "quotation": 7016,
    "uniqueConsecutive": "A7016",
    "evaluations": [
      { "id": 46, "item": 19, "status": true, "observation": "", "corrected": true },
      { "id": 47, "item": 2, "status": true, "observation": "", "corrected": true },
      { "id": 48, "item": 36, "status": false, "observation": "", "corrected": false }
    ]
  },
  {
    "id": 18,
    "customerNit": 901000001,
    "elevatorId": 18,
    "quotation": 7017,
    "uniqueConsecutive": "A7017",
    "evaluations": [
      { "id": 49, "item": 11, "status": false, "observation": "", "corrected": true },
      { "id": 50, "item": 22, "status": true, "observation": "", "corrected": true },
      { "id": 51, "item": 33, "status": true, "observation": "", "corrected": true }
    ]
  },
  {
    "id": 19,
    "customerNit": 901000002,
    "elevatorId": 19,
    "quotation": 7018,
    "uniqueConsecutive": "A7018",
    "evaluations": [
      { "id": 52, "item": 1, "status": true, "observation": "", "corrected": true },
      { "id": 53, "item": 2, "status": false, "observation": "", "corrected": false },
      { "id": 54, "item": 35, "status": false, "observation": "", "corrected": false }
    ]
  },
  {
    "id": 20,
    "customerNit": 901000003,
    "elevatorId": 20,
    "quotation": 7019,
    "uniqueConsecutive": "A7019",
    "evaluations": [
      { "id": 55, "item": 1, "status": true, "observation": "", "corrected": true },
      { "id": 56, "item": 28, "status": false, "observation": "", "corrected": true },
      { "id": 57, "item": 3, "status": true, "observation": "", "corrected": true }
    ]
  },
  {
    "id": 21,
    "customerNit": 901000003,
    "elevatorId": 21,
    "quotation": 7020,
    "uniqueConsecutive": "A7020",
    "evaluations": [
      { "id": 58, "item": 1, "status": false, "observation": "", "corrected": true },
      { "id": 59, "item": 2, "status": true, "observation": "", "corrected": true },
      { "id": 60, "item": 31, "status": true, "observation": "", "corrected": true }
    ]
  },
  {
    "id": 22,
    "customerNit": 901000004,
    "elevatorId": 22,
    "quotation": 7021,
    "uniqueConsecutive": "A7021",
    "evaluations": [
      { "id": 61, "item": 17, "status": false, "observation": "", "corrected": false },
      { "id": 62, "item": 2, "status": false, "observation": "", "corrected": false },
      { "id": 63, "item": 3, "status": false, "observation": "", "corrected": false }
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

