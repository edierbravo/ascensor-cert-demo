import { createSlice } from "@reduxjs/toolkit";

const initialCustomerList = [
  {
    "name": "CONJUNTO CERRADO AGORA",
    "nit": 901000001,
    "address": "CALLE 3 # 21-16 LA JULITA PEREIRA",
    "buildingType": "EDIFICIO",
    "elevators": [],
    "administrator": "Juan Angel",
    "email": "edificio1@gmail.com",
    "phone": "3160000001"
  },
  {
    "name": "TORRE DEL BOSQUE",
    "nit": 901000002,
    "address": "CARRERA 10 # 34-20 CENTRO",
    "buildingType": "EDIFICIO",
    "elevators": [
      {"id": "ASC 1", "brand": "Otis"},
      {"id": "ASC 2", "brand": "Otis"},
      {"id": "ASC 3", "brand": "Otis"}
    ],
    "administrator": "Ana Pérez",
    "email": "torre1@gmail.com",
    "phone": "3160000002"
  },
  {
    "name": "CONJUNTO LA ESPERANZA",
    "nit": 901000003,
    "address": "CALLE 50 # 10-30 SUR",
    "buildingType": "CONJUNTO RESIDENCIAL",
    "elevators": [
      {"id": "ASC 1", "brand": "Schindler"}
    ],
    "administrator": "Carlos Gómez",
    "email": "esperanza@gmail.com",
    "phone": "3160000003"
  },
  {
    "name": "TORRE AZUL",
    "nit": 901000004,
    "address": "AVENIDA 5 # 11-50 NORTE",
    "buildingType": "EDIFICIO",
    "elevators": [
      {"id": "ASC IMPAR", "brand": "Mitsubichi"},
      {"id": "ASC PAR", "brand": "Mitsubichi"}
    ],
    "administrator": "Luis Ramírez",
    "email": "azul@gmail.com",
    "phone": "3160000004"
  },
  {
    "name": "CONJUNTO PALMA REAL",
    "nit": 901000005,
    "address": "CALLE 25 # 12-10 OCCIDENTE",
    "buildingType": "CONJUNTO RESIDENCIAL",
    "elevators": [],
    "administrator": "María Torres",
    "email": "palma@gmail.com",
    "phone": "3160000005"
  },
  {
    "name": "TORRE SOL",
    "nit": 901000006,
    "address": "CARRERA 7 # 18-45 CENTRO",
    "buildingType": "EDIFICIO",
    "elevators": [
      {"id": "ASC 1", "brand": "Kone"}
    ],
    "administrator": "Fernando Díaz",
    "email": "sol@gmail.com",
    "phone": "3160000006"
  },
  {
    "name": "CONJUNTO EL LAGO",
    "nit": 901000007,
    "address": "CALLE 12 # 20-10 NORTE",
    "buildingType": "CONJUNTO RESIDENCIAL",
    "elevators": [
      {"id": "ASC 1", "brand": "Otis"},
      {"id": "ASC 2", "brand": "Otis"}
    ],
    "administrator": "Laura Ruiz",
    "email": "lago@gmail.com",
    "phone": "3160000007"
  },
  {
    "name": "TORRE VERDE",
    "nit": 901000008,
    "address": "AVENIDA 9 # 30-20 SUR",
    "buildingType": "EDIFICIO",
    "elevators": [
      {"id": "ASC IMPAR", "brand": "Mitsubichi"}
    ],
    "administrator": "Miguel Ángel",
    "email": "verde@gmail.com",
    "phone": "3160000008"
  },
  {
    "name": "CONJUNTO LOMA LINDA",
    "nit": 901000009,
    "address": "CALLE 14 # 15-22 OCCIDENTE",
    "buildingType": "CONJUNTO RESIDENCIAL",
    "elevators": [],
    "administrator": "Patricia Rojas",
    "email": "loma@gmail.com",
    "phone": "3160000009"
  },
  {
    "name": "TORRE CENTRAL",
    "nit": 901000010,
    "address": "CARRERA 5 # 10-12 CENTRO",
    "buildingType": "EDIFICIO",
    "elevators": [
      {"id": "ASC 1", "brand": "Schindler"},
      {"id": "ASC 2", "brand": "Schindler"}
    ],
    "administrator": "Andrés Molina",
    "email": "central@gmail.com",
    "phone": "3160000010"
  },
  {
    "name": "CONJUNTO EL PARAISO",
    "nit": 901000011,
    "address": "CALLE 18 # 5-40 NORTE",
    "buildingType": "CONJUNTO RESIDENCIAL",
    "elevators": [],
    "administrator": "Sofía Herrera",
    "email": "paraiso@gmail.com",
    "phone": "3160000011"
  },
  {
    "name": "TORRE MARFIL",
    "nit": 901000012,
    "address": "AVENIDA 6 # 12-25 CENTRO",
    "buildingType": "EDIFICIO",
    "elevators": [
      {"id": "ASC 1", "brand": "Kone"},
      {"id": "ASC 2", "brand": "Kone"},
      {"id": "ASC 3", "brand": "Kone"}
    ],
    "administrator": "Julio Castro",
    "email": "marfil@gmail.com",
    "phone": "3160000012"
  },
  {
    "name": "CONJUNTO MONTE VERDE",
    "nit": 901000013,
    "address": "CALLE 8 # 25-18 SUR",
    "buildingType": "CONJUNTO RESIDENCIAL",
    "elevators": [
      {"id": "ASC 1", "brand": "Otis"}
    ],
    "administrator": "Carolina Jiménez",
    "email": "monte@gmail.com",
    "phone": "3160000013"
  },
  {
    "name": "TORRE RUBÍ",
    "nit": 901000014,
    "address": "CARRERA 3 # 20-50 OCCIDENTE",
    "buildingType": "EDIFICIO",
    "elevators": [
      {"id": "ASC IMPAR", "brand": "Mitsubichi"},
      {"id": "ASC PAR", "brand": "Mitsubichi"}
    ],
    "administrator": "Diego León",
    "email": "rubi@gmail.com",
    "phone": "3160000014"
  },
  {
    "name": "CONJUNTO LA FLORIDA",
    "nit": 901000015,
    "address": "CALLE 20 # 18-30 NORTE",
    "buildingType": "CONJUNTO RESIDENCIAL",
    "elevators": [],
    "administrator": "Marcela Torres",
    "email": "florida@gmail.com",
    "phone": "3160000015"
  },
  {
    "name": "TORRE OPALO",
    "nit": 901000016,
    "address": "AVENIDA 2 # 5-12 CENTRO",
    "buildingType": "EDIFICIO",
    "elevators": [
      {"id": "ASC 1", "brand": "Schindler"}
    ],
    "administrator": "Héctor Salazar",
    "email": "opalo@gmail.com",
    "phone": "3160000016"
  },
  {
    "name": "CONJUNTO EL BOSQUE",
    "nit": 901000017,
    "address": "CALLE 3 # 8-16 SUR",
    "buildingType": "CONJUNTO RESIDENCIAL",
    "elevators": [
      {"id": "ASC 1", "brand": "Kone"},
      {"id": "ASC 2", "brand": "Kone"}
    ],
    "administrator": "Valeria Mejía",
    "email": "elbosque@gmail.com",
    "phone": "3160000017"
  },
  {
    "name": "TORRE CARMESÍ",
    "nit": 901000018,
    "address": "CARRERA 9 # 14-20 NORTE",
    "buildingType": "EDIFICIO",
    "elevators": [
      {"id": "ASC IMPAR", "brand": "Otis"}
    ],
    "administrator": "Roberto Molina",
    "email": "carmesi@gmail.com",
    "phone": "3160000018"
  },
  {
    "name": "CONJUNTO EL LIRIO",
    "nit": 901000019,
    "address": "CALLE 6 # 12-10 OCCIDENTE",
    "buildingType": "CONJUNTO RESIDENCIAL",
    "elevators": [],
    "administrator": "Claudia Sánchez",
    "email": "lirio@gmail.com",
    "phone": "3160000019"
  },
  {
    "name": "TORRE DIAMANTE",
    "nit": 901000020,
    "address": "AVENIDA 7 # 18-25 CENTRO",
    "buildingType": "EDIFICIO",
    "elevators": [
      {"id": "ASC 1", "brand": "Mitsubichi"},
      {"id": "ASC 2", "brand": "Mitsubichi"}
    ],
    "administrator": "Esteban Herrera",
    "email": "diamante@gmail.com",
    "phone": "3160000020"
  }
]


export const CustomerSlice = createSlice({
  name: "customers",
  initialState: {
    customers: initialCustomerList,
    customerSelected: {},
  },
  reducers: {
    onCustomerSelected: (state, action) => {
      state.customerSelected = state.customers.find(customer => customer.nit === action.payload);
    },

    setCustomers: (state, action) => {
      state.customers = action.payload;
    },
  },
});

export const {
  setCustomers,
  onCustomerSelected,
} = CustomerSlice.actions;

