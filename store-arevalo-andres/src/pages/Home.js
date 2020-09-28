import React from "react";
import { HeaderUser } from "../components/Organism/HeaderUser/index";
import { HeaderSection } from "../components/Organism/HeaderSection/index";
import { FilterSection } from "../components/Organism/FilterSection/index";
import { ListProducts } from "../components/Organism/ListProducts/index";

const Home = () => {
  return (
    <div>
      <HeaderUser />
      <HeaderSection />
      <FilterSection />
      <ListProducts />
      <FilterSection />
    </div>
  );
};

export default Home;
