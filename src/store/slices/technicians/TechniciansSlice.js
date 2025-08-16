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
    {
        id: 100000005,
        name: "Carlos",
        tel: 3140000005,
        email: "carlos@gmail.com",
        region: "Zona 1",
        city: "Medellin"
    },
    {
        id: 100000006,
        name: "Andres",
        tel: 3140000006,
        email: "andres@gmail.com",
        region: "Zona 3",
        city: "Cali"
    },
    {
        id: 100000007,
        name: "Felipe",
        tel: 3140000007,
        email: "felipe@gmail.com",
        region: "Zona 1",
        city: "Bogota"
    },
    {
        id: 100000008,
        name: "Miguel",
        tel: 3140000008,
        email: "miguel@gmail.com",
        region: "Zona 2",
        city: "Medellin"
    },
    {
        id: 100000009,
        name: "Santiago",
        tel: 3140000009,
        email: "santiago@gmail.com",
        region: "Zona 3",
        city: "Cali"
    },
    {
        id: 100000010,
        name: "Jorge",
        tel: 3140000010,
        email: "jorge@gmail.com",
        region: "Zona 1",
        city: "Bogota"
    },
    {
        id: 100000011,
        name: "Oscar",
        tel: 3140000011,
        email: "oscar@gmail.com",
        region: "Zona 2",
        city: "Medellin"
    },
    {
        id: 100000012,
        name: "David",
        tel: 3140000012,
        email: "david@gmail.com",
        region: "Zona 3",
        city: "Cali"
    },
    {
        id: 100000013,
        name: "Ricardo",
        tel: 3140000013,
        email: "ricardo@gmail.com",
        region: "Zona 1",
        city: "Bogota"
    },
    {
        id: 100000014,
        name: "Alejandro",
        tel: 3140000014,
        email: "alejandro@gmail.com",
        region: "Zona 2",
        city: "Medellin"
    },
    {
        id: 100000015,
        name: "Mauricio",
        tel: 3140000015,
        email: "mauricio@gmail.com",
        region: "Zona 3",
        city: "Cali"
    },
    {
        id: 100000016,
        name: "Camilo",
        tel: 3140000016,
        email: "camilo@gmail.com",
        region: "Zona 1",
        city: "Bogota"
    },
    {
        id: 100000017,
        name: "Sebastian",
        tel: 3140000017,
        email: "sebastian@gmail.com",
        region: "Zona 2",
        city: "Medellin"
    },
    {
        id: 100000018,
        name: "Julian",
        tel: 3140000018,
        email: "julian@gmail.com",
        region: "Zona 3",
        city: "Cali"
    },
    {
        id: 100000019,
        name: "Manuel",
        tel: 3140000019,
        email: "manuel@gmail.com",
        region: "Zona 1",
        city: "Bogota"
    },
    {
        id: 100000020,
        name: "Francisco",
        tel: 3140000020,
        email: "francisco@gmail.com",
        region: "Zona 2",
        city: "Medellin"
    },
    {
        id: 100000021,
        name: "Victor",
        tel: 3140000021,
        email: "victor@gmail.com",
        region: "Zona 3",
        city: "Cali"
    },
    {
        id: 100000022,
        name: "Hernan",
        tel: 3140000022,
        email: "hernan@gmail.com",
        region: "Zona 1",
        city: "Bogota"
    },
    {
        id: 100000023,
        name: "Alberto",
        tel: 3140000023,
        email: "alberto@gmail.com",
        region: "Zona 2",
        city: "Medellin"
    },
    {
        id: 100000024,
        name: "Fabian",
        tel: 3140000024,
        email: "fabian@gmail.com",
        region: "Zona 3",
        city: "Cali"
    },
    {
        id: 100000025,
        name: "Martin",
        tel: 3140000025,
        email: "martin@gmail.com",
        region: "Zona 1",
        city: "Bogota"
    },
    {
        id: 100000026,
        name: "Javier",
        tel: 3140000026,
        email: "javier@gmail.com",
        region: "Zona 2",
        city: "Medellin"
    },
    {
        id: 100000027,
        name: "Lucas",
        tel: 3140000027,
        email: "lucas@gmail.com",
        region: "Zona 3",
        city: "Cali"
    },
    {
        id: 100000028,
        name: "Nicolas",
        tel: 3140000028,
        email: "nicolas@gmail.com",
        region: "Zona 1",
        city: "Bogota"
    },
    {
        id: 100000029,
        name: "Samuel",
        tel: 3140000029,
        email: "samuel@gmail.com",
        region: "Zona 2",
        city: "Medellin"
    },
    {
        id: 100000030,
        name: "Tomas",
        tel: 3140000030,
        email: "tomas@gmail.com",
        region: "Zona 3",
        city: "Cali"
    },
    {
        id: 100000031,
        name: "Diego",
        tel: 3140000031,
        email: "diego@gmail.com",
        region: "Zona 1",
        city: "Bogota"
    },
    {
        id: 100000032,
        name: "Adrian",
        tel: 3140000032,
        email: "adrian@gmail.com",
        region: "Zona 2",
        city: "Medellin"
    },
    {
        id: 100000033,
        name: "Simon",
        tel: 3140000033,
        email: "simon@gmail.com",
        region: "Zona 3",
        city: "Cali"
    },
    {
        id: 100000034,
        name: "Emilio",
        tel: 3140000034,
        email: "emilio@gmail.com",
        region: "Zona 1",
        city: "Bogota"
    },
    {
        id: 100000035,
        name: "Gabriel",
        tel: 3140000035,
        email: "gabriel@gmail.com",
        region: "Zona 2",
        city: "Medellin"
    },
    {
        id: 100000036,
        name: "Pedro",
        tel: 3140000036,
        email: "pedro@gmail.com",
        region: "Zona 3",
        city: "Cali"
    },
    {
        id: 100000037,
        name: "Raul",
        tel: 3140000037,
        email: "raul@gmail.com",
        region: "Zona 1",
        city: "Bogota"
    },
    {
        id: 100000038,
        name: "Hugo",
        tel: 3140000038,
        email: "hugo@gmail.com",
        region: "Zona 2",
        city: "Medellin"
    },
    {
        id: 100000039,
        name: "Rafael",
        tel: 3140000039,
        email: "rafael@gmail.com",
        region: "Zona 3",
        city: "Cali"
    },
    {
        id: 100000040,
        name: "Mario",
        tel: 3140000040,
        email: "mario@gmail.com",
        region: "Zona 1",
        city: "Bogota"
    }
];

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

