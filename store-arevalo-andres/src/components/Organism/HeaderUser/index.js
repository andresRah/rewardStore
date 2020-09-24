import React from "react";
import { Coin } from "../../Atoms/Coin/index";
import { Header, Segment, Label } from "semantic-ui-react";

export const HeaderUser = () => {
  return (
    <Segment>
      <Header as="h4" textAlign="right">
        Julia Coi
      </Header>
      <Label as="a" image>
        6000 <Coin />
      </Label>
    </Segment>
  );
};
