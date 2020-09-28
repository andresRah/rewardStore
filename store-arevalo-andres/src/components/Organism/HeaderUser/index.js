import React from "react";
import { Segment, Header } from "semantic-ui-react";
import { LabelIcon } from "../LabelIcon/index";
import { AeroLabLogo } from "../../Atoms/AeroLabLogo/index";
import "./style.css";

export const HeaderUser = () => {
  return (
    <>
      <Segment clearing className="segment-header">
        <Header as="h2" floated="left">
          <AeroLabLogo />
        </Header>
        <Header as="h4" floated="right" className="header-coin">
          <Header.Content>Julia Coi</Header.Content>
          <LabelIcon text="6000" />
        </Header>
      </Segment>
    </>
  );
};
