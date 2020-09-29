import React from "react";
import ReactDOM from "react-dom";

import { createContainer } from "react-tracked";
import useThunkReducer from "react-hook-thunk-reducer";

const initialState = { loading: false, data: null };
const reducer = (state, action) => {
  if (action.type === "FETCH_STARTED") {
    return { ...state, loading: true };
  } else if (action.type === "FETCH_FINISHED") {
    return { ...state, loading: false, data: action.data };
  } else {
    return state;
  }
};

const useValue = () => useThunkReducer(reducer, initialState);
const { Provider, useTracked } = createContainer(useValue);

const fetchData = (id) => async (dispatch, getState) => {
  dispatch({ type: "FETCH_STARTED" });
  const response = await fetch(`https://reqres.in/api/users/${id}?delay=1`);
  const data = await response.json();
  dispatch({ type: "FETCH_FINISHED", data });
};

const Main = () => {
  const [state, dispatch] = useTracked();
  return (
    <div>
      <div>Data: {JSON.stringify(state.data)}</div>
      <div>
        <button type="button" onClick={() => dispatch(fetchData(1))}>
          Fetch
        </button>
        {state.loading && <span>Loading...</span>}
      </div>
    </div>
  );
};
const App = () => (
  <Provider>
    <Main />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
