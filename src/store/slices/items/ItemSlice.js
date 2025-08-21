import { createSlice } from "@reduxjs/toolkit";

const itemsList = [
  {
    id: 1,
    code: 1,
    description: "Estado estructural de la cabina",
    defect: "G",
  },
  {
    id: 2,
    code: 2,
    description: "Iluminación interior de la cabina",
    defect: "L",
  },
  {
    id: 3,
    code: 3,
    description: "Botón de alarma en cabina",
    defect: "MG",
  },
  {
    id: 4,
    code: 4,
    description: "Teléfono o intercomunicador de emergencia",
    defect: "MG",
  },
  {
    id: 5,
    code: 5,
    description: "Sensor de puertas (fotocélulas o cortinas de luz)",
    defect: "G",
  },
  {
    id: 6,
    code: 6,
    description: "Funcionamiento del limitador de velocidad",
    defect: "MG",
  },
  {
    id: 7,
    code: 7,
    description: "Sistema de freno en máquina de tracción",
    defect: "MG",
  },
  {
    id: 8,
    code: 8,
    description: "Nivelación de cabina con el piso",
    defect: "G",
  },
  {
    id: 9,
    code: 9,
    description: "Señalización de carga máxima y número de personas",
    defect: "L",
  },
  {
    id: 10,
    code: 10,
    description: "Amortiguadores en el foso",
    defect: "G",
  },
  {
    id: 11,
    code: 11,
    description: "Interruptor de paro en el foso",
    defect: "MG",
  },
  {
    id: 12,
    code: 12,
    description: "Estado de cables de tracción",
    defect: "MG",
  },
  {
    id: 13,
    code: 13,
    description: "Acceso seguro al cuarto de máquinas",
    defect: "G",
  },
  {
    id: 14,
    code: 14,
    description: "Indicador de piso en cabina y en exteriores",
    defect: "L",
  },
  {
    id: 15,
    code: 15,
    description: "Detector de sobrecarga en cabina",
    defect: "G",
  },
  {
    id: 16,
    code: 16,
    description: "Funcionamiento suave de apertura y cierre de puertas",
    defect: "L",
  },
  {
    id: 17,
    code: 17,
    description: "Fuerza de cierre de puertas dentro del rango permitido",
    defect: "G",
  },
  {
    id: 18,
    code: 18,
    description: "Ventilación dentro de la cabina",
    defect: "L",
  },
  {
    id: 19,
    code: 19,
    description: "Estado de los rieles de guía",
    defect: "G",
  },
  {
    id: 20,
    code: 20,
    description: "Lubricación adecuada en guías y partes móviles",
    defect: "L",
  },
  {
    id: 21,
    code: 21,
    description: "Estado de contrapeso y fijaciones",
    defect: "G",
  },
  {
    id: 22,
    code: 22,
    description: "Funcionamiento de paracaídas mecánico",
    defect: "MG",
  },
  {
    id: 23,
    code: 23,
    description: "Condiciones del cuadro de control eléctrico",
    defect: "G",
  },
  {
    id: 24,
    code: 24,
    description: "Protecciones eléctricas en tablero",
    defect: "MG",
  },
  {
    id: 25,
    code: 25,
    description: "Limpieza general del foso",
    defect: "L",
  },
  {
    id: 26,
    code: 26,
    description: "Presencia de agua o humedad en foso",
    defect: "G",
  },
  {
    id: 27,
    code: 27,
    description: "Iluminación en el foso",
    defect: "L",
  },
  {
    id: 28,
    code: 28,
    description: "Acceso seguro al foso",
    defect: "G",
  },
  {
    id: 29,
    code: 29,
    description: "Señales de advertencia visibles en el ascensor",
    defect: "L",
  },
  {
    id: 30,
    code: 30,
    description: "Estado de poleas y alineación",
    defect: "G",
  },
  {
    id: 31,
    code: 31,
    description: "Nivel de aceite en reductor de máquina",
    defect: "L",
  },
  {
    id: 32,
    code: 32,
    description: "Accesibilidad de botoneras (altura adecuada, braille)",
    defect: "G",
  },
  {
    id: 33,
    code: 33,
    description: "Sistema de rescate automático en caso de corte eléctrico",
    defect: "MG",
  },
  {
    id: 34,
    code: 34,
    description: "Puertas de piso en buen estado estructural",
    defect: "G",
  },
  {
    id: 35,
    code: 35,
    description: "Iluminación en accesos al ascensor",
    defect: "L",
  },
  {
    id: 36,
    code: 36,
    description: "Interruptores de seguridad en puertas",
    defect: "MG",
  },
  {
  id: 37,
  code: 37,
  description: "Deficiencia en el sistema de alarma",
  defect: "MG",
},
{
  id: 38,
  code: 38,
  description: "Puertas exteriores en mal estado",
  defect: "G",
},
{
  id: 39,
  code: 39,
  description: "Puertas interiores sin cierre correcto",
  defect: "G",
},
{
  id: 40,
  code: 40,
  description: "Botonera sin iluminación o dañada",
  defect: "L",
},
{
  id: 41,
  code: 41,
  description: "Desgaste en guías del ascensor",
  defect: "G",
},
{
  id: 42,
  code: 42,
  description: "Fugas de aceite en el sistema hidráulico",
  defect: "G",
},
{
  id: 43,
  code: 43,
  description: "Ventilación insuficiente en cabina",
  defect: "L",
},
{
  id: 44,
  code: 44,
  description: "Iluminación de cabina defectuosa",
  defect: "L",
},
{
  id: 45,
  code: 45,
  description: "Defecto en el sistema de frenos",
  defect: "G",
},
{
  id: 46,
  code: 46,
  description: "Parada fuera de nivel en los pisos",
  defect: "G",
},
{
  id: 47,
  code: 47,
  description: "Botón de parada de emergencia no funciona",
  defect: "G",
},
{
  id: 48,
  code: 48,
  description: "Teléfono de emergencia sin señal",
  defect: "G",
},
{
  id: 49,
  code: 49,
  description: "Espejo de cabina en mal estado",
  defect: "L",
},
{
  id: 50,
  code: 50,
  description: "Piso de cabina dañado o resbaladizo",
  defect: "L",
},
{
  id: 51,
  code: 51,
  description: "Sistema de control con fallas intermitentes",
  defect: "G",
},
{
  id: 52,
  code: 52,
  description: "Indicadores de piso defectuosos",
  defect: "L",
},
{
  id: 53,
  code: 53,
  description: "Puertas con apertura forzada o incompleta",
  defect: "G",
},
];

export const ItemSlice = createSlice({
  name: "inspectionItems",
  initialState: {
    inspectionItems: itemsList,
    itemSelected: {},
  },

  reducers: {
    setItems: (state, action) => {
      state.inspectionItems = action.payload;
    },
    onItemSelectedById: (state, action) => {
      state.itemSelected = state.inspectionItems.find(
        (item) => item.id == action.payload
      );
    },
  },
});

export const { setItems, onItemSelectedById } = ItemSlice.actions;
