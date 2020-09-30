import React from "react";
import { Header, Image } from "semantic-ui-react";

import logo from "../../../assets/png/header.png";
import "./style.css";

export const HeaderSection = () => {
  return (
    <>
      <Header as="h4" className="over-image">
        Electronics
      </Header>
      <Image src={logo} fluid />
    </>
  );
};
