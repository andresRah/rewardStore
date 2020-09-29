import React, { useContext, useEffect } from "react";
import { HeaderUser } from "../components/Organism/HeaderUser/index";
import { HeaderSection } from "../components/Organism/HeaderSection/index";
import { FilterSection } from "../components/Organism/FilterSection/index";
import { ListProducts } from "../components/Organism/ListProducts/index";

import { AppContext } from "../providers/ContextProvider";
import { callServiceAPI } from "../utils/services";

const Home = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: "LOADING_PRODUCTS" });

    callServiceAPI("/products", "GET").then((data) => {
      console.log(data);
      dispatch({ type: "LOAD_PRODUCTS", data });
    });
  }, []); // The empty array causes this effect to only run on mount

  return (
    <div>
      {!state.loading && (
        <>
          <HeaderUser />
          <HeaderSection />
          <FilterSection />
          <ListProducts />
          <FilterSection />
        </>
      )}
    </div>
  );
};

export default Home;

// let [profile, profileR] = React.useReducer(reducer, initialState);

// const onReloadNeeded = useCallback(async () => {
//   const profileData = await reloadProfile();
//   profileR({
//     type: "profileReady",
//     payload: profileData,
//   });
// }, []); // The empty array causes this callback to only be created once per component instance
