import React from "react";
import { Header, Container, Divider } from "semantic-ui-react";
import { ArrowRight } from "../../Atoms/ArrowRight/index";
import { ArrowLeft } from "../../Atoms/ArrowLeft/index";

import "./style.css";

export const FilterSection = () => {
  return (
    <Container className="filter-container">
      <Header className="flex-filter">
        16 of 32 products
        <div>
          <ArrowLeft size="38" marginRight="5px" />
          <ArrowRight size="38" />
        </div>
      </Header>
      <Divider />
    </Container>
  );
};
