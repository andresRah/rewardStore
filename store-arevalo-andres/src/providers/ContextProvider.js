import React, { useReducer } from "react";

export const AppContext = React.createContext();

const listaLibros = [
  { id: "1", nombre: "Crimen y castigo", leido: false },
  { id: "2", nombre: "Cien años de soledad", leido: true },
  { id: "3", nombre: "La divina comedia", leido: true },
  { id: "4", nombre: "El principito", leido: false },
  { id: "5", nombre: "El retrato de Dorian Grey,", leido: false },
];

const initialState = {
  libros: listaLibros,
};

function applicationReducer(state, action) {
  switch (action.type) {
    case "GET_LIBROS":
      return { libros: state.libros };

    case "DROP_LIBROS":
      return { libros: [] };

    default:
      throw new Error();
  }
}

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(applicationReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
