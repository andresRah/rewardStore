import React, { useContext, useEffect } from "react";
import { FilterSection } from "../components/Organism/FilterSection/index";
import { ListProducts } from "../components/Organism/ListProducts/index";
import Layout from "./Layout";

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

  return (
    <Layout>
      <FilterSection />
      <ListProducts products={state.products} />
      <FilterSection />
    </Layout>
  );
};

export default Home;
