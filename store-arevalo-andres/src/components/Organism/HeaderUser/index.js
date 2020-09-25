import React from "react";
import { Coin } from "../../Atoms/Coin/index";
import { Header, Segment, Label } from "semantic-ui-react";
import "./style.css";

export const HeaderUser = () => {
  return (
    <Segment textAlign="right" className="segment-header">
      <Header as="h4" className="header-coin">
        <Header.Content>Julia Coi</Header.Content>
        <Label as="a" className="label-coin">
          6000 <Coin />
        </Label>
      </Header>
    </Segment>
  );
};
