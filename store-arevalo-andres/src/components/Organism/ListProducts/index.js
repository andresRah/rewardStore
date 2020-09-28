import React from "react";

import { Card, Container } from "semantic-ui-react";
import { Product } from "../Product/index";

export const ListProducts = () => {
  return (
    <Container>
      <Card.Group itemsPerRow={4}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Card.Group>
    </Container>
  );
};
