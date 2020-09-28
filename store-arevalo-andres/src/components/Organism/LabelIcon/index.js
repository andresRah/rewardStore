import React from "react";
import { Coin } from "../../Atoms/Coin/index";
import { Label } from "semantic-ui-react";

export const LabelIcon = ({ text, onClick }) => {
  return (
    <Label as="a" className="label-coin" onClick={onClick}>
      {text} <Coin />
    </Label>
  );
};
