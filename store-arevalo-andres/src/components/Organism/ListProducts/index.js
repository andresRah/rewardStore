import React from "react";

import { Card, Container } from "semantic-ui-react";
import { Product } from "../Product/index";

export const ListProducts = ({ products }) => {
  return (
    <Container>
      <Card.Group itemsPerRow={4}>
        {products?.map((item, index) => (
          <Product key={index} productInfo={item} />
        ))}
      </Card.Group>
    </Container>
  );
};
