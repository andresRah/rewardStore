import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../providers/ContextProvider";

import { Card, Container } from "semantic-ui-react";
import { Product } from "../Product/index";

export const ListProducts = () => {
  const { state, dispatch } = useContext(AppContext);
  //  <button onClick={() => dispatch({ type: "increment" })}>

  // useEffect(() => {
  //   dispatch({ type: "GET_LIBROS" });
  // }, []);

  return (
    <Container>
      <Card.Group itemsPerRow={4}>
        {/* <div>
          <button onClick={() => dispatch({ type: "DROP_LIBROS" })}>
            Increment
          </button>
          {state.libros.map((item, index) => (
            <h1 key={index}>{item.nombre}</h1>
          ))}
        </div> */}

        {state?.products?.map((item, index) => (
          <Product key={index} productInfo={item} />
        ))}
      </Card.Group>
    </Container>
  );
};
