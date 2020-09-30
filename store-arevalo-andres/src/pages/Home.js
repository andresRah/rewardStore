import React, { useContext, useEffect, useState } from "react";
import { FilterSection } from "../components/Organism/FilterSection/index";
import { ListProducts } from "../components/Organism/ListProducts/index";
import Layout from "./Layout";
import usePagination from "../utils/hooks/usePagination";

import { AppContext } from "../providers/ContextProvider";
import { callServiceAPI } from "../utils/services";

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  const { currentProducts, setCurrentProducts } = useState([]);
  const { next, prev, currentData, currentPage, maxPage } = usePagination(
    state.products,
    16
  );

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

  const FilterSectionPaginated = () => (
    <FilterSection
      nextClick={next}
      prevClick={prev}
      currentPage={currentPage}
      maxPage={maxPage}
    />
  );

  return (
    <Layout>
      <FilterSectionPaginated />
      <ListProducts products={currentData()} />
      <FilterSectionPaginated />
    </Layout>
  );
};

export default Home;
