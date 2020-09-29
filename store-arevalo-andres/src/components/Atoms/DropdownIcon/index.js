import React from "react";
import { Dropdown } from "semantic-ui-react";

export const DropdownIcon = ({ placeholder, options }) => (
  <Dropdown placeholder={placeholder} fluid selection options={options} />
);
