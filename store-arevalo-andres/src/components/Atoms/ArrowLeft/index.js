import React from "react";
import { Svg } from "./styles";

export const ArrowLeft = (props) => (
  <Svg
    width={props?.size || 48}
    height={props?.size || 48}
    viewBox="0 0 48 48"
    {...props}
  >
    <title>{"arrow-left"}</title>
    <g fill="none" fillRule="evenodd">
      <circle stroke="#D9D9D9" cx={24} cy={24} r={23.5} />
      <path
        fill="#D9D9D9"
        d="M27.705 28.295l-4.58-4.59 4.58-4.59-1.41-1.41-6 6 6 6z"
      />
    </g>
  </Svg>
);
