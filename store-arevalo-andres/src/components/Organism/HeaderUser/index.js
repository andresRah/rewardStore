import React from "react";
import { Segment, Header } from "semantic-ui-react";
import { LabelIcon } from "../LabelIcon/index";
import "./style.css";

export const HeaderUser = () => {
  return (
    <>
      <Segment textAlign="right" className="segment-header">
        <Header as="h4" className="header-coin">
          <Header.Content>Julia Coi</Header.Content>
          <LabelIcon text="6000" />
        </Header>
      </Segment>
    </>
  );
};
