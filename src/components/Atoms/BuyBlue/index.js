import React from "react";

export const BuyBlue = (props) => (
  <svg width={50} height={50} viewBox="0 0 50 50" {...props}>
    <title>{"icon-white"}</title>
    <defs>
      <filter
        x="-9.1%"
        y="-9.1%"
        width="128.3%"
        height="128.3%"
        filterUnits="objectBoundingBox"
        id="prefix__a"
      >
        <feOffset dx={2} dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={2}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g
      filter="url(#prefix__a)"
      transform="translate(-220 -10)"
      fill="none"
      fillRule="evenodd"
    >
      <g transform="translate(222 12)">
        <circle fill="#0AD4FA" cx={21} cy={21} r={21} />
        <path
          d="M29.995 29.108L28.882 15.53a.598.598 0 00-.604-.542h-3.033v-1.06c0-1.615-1.36-2.929-3.032-2.929h-2.426c-1.672 0-3.032 1.314-3.032 2.93v1.06h-3.033a.598.598 0 00-.604.54l-1.113 13.577c-.038.487.136.971.48 1.33.343.358.83.563 1.334.563h14.362c.505 0 .991-.205 1.335-.563.343-.359.517-.843.479-1.33zM18 14.25c0-1.24.807-2.25 1.8-2.25h2.4c.993 0 1.8 1.01 1.8 2.25V15h-6v-.75z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </g>
  </svg>
);
