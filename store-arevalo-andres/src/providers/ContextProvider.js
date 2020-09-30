import React, { useReducer } from "react";

export const AppContext = React.createContext();

const initialState = {
  products: [],
  userInfo: undefined,
  loading: false,
};

function applicationReducer(state, action) {
  switch (action.type) {
    case "LOAD_USERINFO":
      return { ...state, userInfo: action.data, loading: false };

    case "LOAD_PRODUCTS":
      return { ...state, products: action.data, loading: false };

    case "UPDATED_TOTAL_AMOUNT":
      return {
        ...state,
        userInfo: { ...state.userInfo, points: action.data },
        loading: false,
      };

    case "LOADING":
      return { ...state, loading: true };

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
