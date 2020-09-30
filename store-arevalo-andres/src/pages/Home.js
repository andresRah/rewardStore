import React, { useContext, useEffect } from "react";
import { HeaderUser } from "../components/Organism/HeaderUser/index";
import { HeaderSection } from "../components/Organism/HeaderSection/index";
import { FilterSection } from "../components/Organism/FilterSection/index";
import { ListProducts } from "../components/Organism/ListProducts/index";
import { Loader, Dimmer } from "semantic-ui-react";
import { ResultOperationModal } from "../components/Organism/ResultOperationModal/index";

import { AppContext } from "../providers/ContextProvider";
import { callServiceAPI } from "../utils/services";

const Home = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: "LOADING" });

      let [products, userInfo] = await Promise.all([
        callServiceAPI("/products", "GET"),
        callServiceAPI("/user/me", "GET"),
      ]);

      dispatch({ type: "LOAD_USERINFO", data: userInfo });
      dispatch({ type: "LOAD_PRODUCTS", data: products });
    }
    fetchData();
  }, []);

  const loaderSection = (
    <Dimmer active inverted>
      <Loader size="large" inline="centered">
        Loading
      </Loader>
    </Dimmer>
  );

  return (
    <div>
      <>
        {state.loading ? (
          loaderSection
        ) : (
          <>
            <HeaderUser userInfo={state.userInfo} />
            <HeaderSection />
            <FilterSection />
            <ListProducts products={state.products} />
            <FilterSection />
            <ResultOperationModal />
          </>
        )}
      </>
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
