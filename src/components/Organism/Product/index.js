import React, { useState, useContext } from "react";
import { Card, Button, Dimmer, Header, Image } from "semantic-ui-react";
import { Coin } from "../../Atoms/Coin/index";
import { LabelIcon } from "../LabelIcon/index";
import { BuyWhite } from "../../Atoms/BuyWhite/index";
import { BuyBlue } from "../../Atoms/BuyBlue/index";
import { AppContext } from "../../../providers/ContextProvider";

import { callServiceAPI } from "../../../utils/services";
import { REDEEM_SUCCESS } from "../../../utils/constants";

import "./style.css";

export const Product = ({ productInfo }) => {
  const [active, setActive] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  const { userInfo } = state;

  const handleShow = () => setActive(true);
  const handleHide = () => setActive(false);

  const onRedemProductNow = async () => {
    let bodyData = {
      productId: productInfo._id,
    };

    dispatch({ type: "LOADING" });

    let body = JSON.stringify(bodyData);
    const redeemResult = await callServiceAPI("/redeem", "POST", body);

    if (redeemResult.message === REDEEM_SUCCESS) {
      let [products, userInfo] = await Promise.all([
        callServiceAPI("/products", "GET"),
        callServiceAPI("/user/me", "GET"),
      ]);

      dispatch({ type: "LOAD_USERINFO", data: userInfo });
      dispatch({ type: "LOAD_PRODUCTS", data: products });
      dispatch({ type: "SUCCESS_MODAL_OPERATION" });
    } else {
      dispatch({ type: "ERROR_MODAL_OPERATION" });
    }
  };

  const content = (
    <div>
      <div>
        <Header as="h2" inverted className="label-coin">
          {productInfo.cost}
          <Coin style={{ marginTop: "3.5px" }} />
        </Header>
      </div>
      <div className="top-right">
        <BuyWhite />
      </div>
      <br />
      <Button primary onClick={onRedemProductNow}>
        Redeem now
      </Button>
    </div>
  );

  return (
    <>
      <Dimmer.Dimmable
        as={Card}
        dimmed={active}
        blurring
        onMouseEnter={handleShow}
        onMouseLeave={handleHide}
      >
        <Dimmer active={active}>{content}</Dimmer>

        <Image src={productInfo.img.hdUrl} className="img-without-border" />

        {userInfo.points < productInfo.cost ? (
          <div className="top-right">
            <LabelIcon
              text={`You need ${productInfo.cost - userInfo.points}`}
            />
          </div>
        ) : (
          <div className="top-right">
            <BuyBlue />
          </div>
        )}

        <Card.Content>
          <Card.Meta>{productInfo.category}</Card.Meta>
          <Card.Description>{productInfo.name}</Card.Description>
        </Card.Content>
      </Dimmer.Dimmable>
    </>
  );
};
