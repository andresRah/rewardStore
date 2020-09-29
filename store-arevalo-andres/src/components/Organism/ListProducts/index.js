import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../providers/ContextProvider";

import { Card, Container } from "semantic-ui-react";
import { Product } from "../Product/index";

export const ListProducts = () => {
  const { state, dispatch } = useContext(AppContext);
  //  <button onClick={() => dispatch({ type: "increment" })}>

  useEffect(() => {
    dispatch({ type: "GET_LIBROS" });
  }, []);

  return (
    <Container>
      <Card.Group itemsPerRow={4}>
        <div>
          <button onClick={() => dispatch({ type: "DROP_LIBROS" })}>
            Increment
          </button>
          {state.libros.map((item) => (
            <h1>{item.nombre}</h1>
          ))}
        </div>
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </Card.Group>
    </Container>
  );
};
