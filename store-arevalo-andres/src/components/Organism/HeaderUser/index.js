import React from "react";
import { Segment, Header } from "semantic-ui-react";
import { LabelIcon } from "../LabelIcon/index";
import { AeroLabLogo } from "../../Atoms/AeroLabLogo/index";

import withAddCoinsModal from "../AddCoinsModal/index";

import "./style.css";

export const HeaderUser = ({ userInfo }) => {
  const AddCoinsModal = withAddCoinsModal(LabelIcon);

  return (
    <>
      <Segment clearing className="segment-header">
        <Header as="h2" floated="left">
          <AeroLabLogo />
        </Header>
        <Header as="h4" floated="right" className="header-coin">
          <Header.Content>{userInfo?.name}</Header.Content>
          <AddCoinsModal text={userInfo?.points} />
        </Header>
      </Segment>
    </>
  );
};
