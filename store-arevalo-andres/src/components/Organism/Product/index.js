import React from "react";
import {
  Card,
  Divider,
  Button,
  Dimmer,
  Header,
  Image,
  Icon,
} from "semantic-ui-react";

import logo from "../../../assets/png/switch.png";

export const Product = () => {
  return (
    <Card>
      <Image
        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Divider clearing />
        <Card.Meta>Phones</Card.Meta>
        <Card.Description>iPhone 8</Card.Description>
      </Card.Content>
    </Card>
  );
};
