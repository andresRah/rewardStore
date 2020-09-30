import React, { useReducer } from "react";

export const AppContext = React.createContext();

const initialState = {
  products: [],
  userInfo: undefined,
  loading: false,
  modalOperationError: false,
  modalOperationStatus: false, // Open = True
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

    case "CLOSE_MODAL_OPERATION":
      return {
        ...state,
        modalOperationStatus: false,
        modalOperationError: false,
      };

    case "SUCCESS_MODAL_OPERATION":
      return {
        ...state,
        modalOperationStatus: true,
        modalOperationError: false,
        loading: false,
      };

    case "ERROR_MODAL_OPERATION":
      return {
        ...state,
        modalOperationStatus: true,
        modalOperationError: true,
        loading: false,
      };

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
