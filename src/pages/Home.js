import React, { useContext, useEffect, useState } from "react";
import { FilterSection } from "../components/Organism/FilterSection/index";
import { ListProducts } from "../components/Organism/ListProducts/index";
import Layout from "./Layout";
import usePagination from "../utils/hooks/usePagination";

import { AppContext } from "../providers/ContextProvider";
import { callServiceAPI } from "../utils/services";

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  const [currentProducts, setCurrentProducts] = useState();
  const { filterbyCategory } = state;

  const { next, prev, currentData, currentPage, maxPage } = usePagination(
    currentProducts,
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
      setCurrentProducts(products);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (filterbyCategory === "All") {
      setCurrentProducts(state.products);
    } else {
      let { products } = state;
      let filteredProducts = products.filter(
        (product) => product.category === filterbyCategory
      );
      setCurrentProducts(filteredProducts);
    }
  }, [filterbyCategory]);

  const FilterSectionPaginated = ({hidden = false}) => (
    <FilterSection
      nextClick={next}
      prevClick={prev}
      currentPage={currentPage}
      maxPage={maxPage}
      hidden={hidden}
    />
  );

  return (
    <Layout>
      <FilterSectionPaginated />
      <ListProducts products={currentData()} />
      <FilterSectionPaginated hidden={true}/>
    </Layout>
  );
};

export default Home;
