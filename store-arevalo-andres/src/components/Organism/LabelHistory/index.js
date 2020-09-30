import React from "react";
import { History } from "../../Atoms/History/index";
import { Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const LabelHistory = ({ onClick }) => {
  return (
    <Link to="/history">
      <Label as="a" className="label-coin" onClick={onClick}>
        <strong>History</strong> <History />
      </Label>
    </Link>
  );
};
