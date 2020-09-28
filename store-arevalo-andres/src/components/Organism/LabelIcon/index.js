import React from "react";
import { Coin } from "../../Atoms/Coin/index";
import { Label } from "semantic-ui-react";

export const LabelIcon = ({ text }) => {
  return (
    <Label as="a" className="label-coin">
      {text} <Coin />
    </Label>
  );
};
