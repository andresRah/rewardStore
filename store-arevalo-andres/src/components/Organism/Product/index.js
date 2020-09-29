import React, { useState } from "react";
import { Card, Button, Dimmer, Header, Image } from "semantic-ui-react";
import { Coin } from "../../Atoms/Coin/index";
// import { LabelIcon } from "../LabelIcon/index";
import { BuyWhite } from "../../Atoms/BuyWhite/index";
import { BuyBlue } from "../../Atoms/BuyBlue/index";

//import imag from "../../../assets/png/switch.png";
import "./style.css";

export const Product = ({ productInfo }) => {
  const [active, setActive] = useState(false);

  const handleShow = () => setActive(true);
  const handleHide = () => setActive(false);

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
      <Button primary>Redeem now</Button>
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

        {/* <div className="top-right">
          <LabelIcon text="You need 6000" />
        </div> */}
        <div className="top-right">
          <BuyBlue />
        </div>

        <Card.Content>
          <Card.Meta>{productInfo.category}</Card.Meta>
          <Card.Description>{productInfo.name}</Card.Description>
        </Card.Content>
      </Dimmer.Dimmable>
    </>
  );
};
