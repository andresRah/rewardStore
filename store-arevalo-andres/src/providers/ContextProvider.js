import React, { useReducer } from "react";

export const AppContext = React.createContext();

const initialState = {
  products: [],
  loading: false,
};

function applicationReducer(state, action) {
  switch (action.type) {
    case "GET_LIBROS":
      return { products: state.products };

    case "DROP_LIBROS":
      return { products: [] };

    case "LOAD_PRODUCTS":
      return { products: action.data, loading: false };

    case "LOADING_PRODUCTS":
      return { loading: true };

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
