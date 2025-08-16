import { createSlice } from "@reduxjs/toolkit";

const techniciansList = [
    {
        id: 100000001,
        name: "Eduardo",
        tel: 3140000001,
        email: "eduardo@gmail.com",
        region: "Zona 1",
        city: "Bogota"
    },
    {
        id: 100000002,
        name: "Juan",
        tel: 3140000002,
        email: "juan@gmail.com",
        region: "Zona 2",
        city: "Bogota"
    },
    {
        id: 100000003,
        name: "Pablo",
        tel: 3140000003,
        email: "pablo@gmail.com",
        region: "Zona 3",
        city: "Bogota"
    },
    {
        id: 100000004,
        name: "Esteban",
        tel: 3140000004,
        email: "esteban@gmail.com",
        region: "Zona 2",
        city: "Bogota"
    },
]

export const TechniciansSlice = createSlice({
  name: "technicians",
  initialState: {
    technicians: techniciansList,
  },

  reducers: {
    setTechnicians: (state, action) => {
      state.technicians = action.payload;
    },
  },
});

export const { 
    setTechnicians 
} = TechniciansSlice.actions;

