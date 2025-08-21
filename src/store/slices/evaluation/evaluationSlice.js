import { createSlice } from "@reduxjs/toolkit";

const evaluationList = [];

export const EvaluationSlice = createSlice({
  name: "evaluatios",
  initialState: {
    evaluatios: evaluationList,
    evaluationsSelected: evaluationList,
    evaluationSelected: {}
  },

  reducers: {
    onEvaluationsSelected: (state, action) => {
      state.evaluationsSelected = action.payload;
    },
    onEvaluationsSelectedById: (state, action) => {
      state.evaluationSelected = state.evaluationsSelected.find((item)=> item.id == action.payload);
    },
  },
});

export const {
  onEvaluationsSelected, 
  onEvaluationsSelectedById,
} = EvaluationSlice.actions;
