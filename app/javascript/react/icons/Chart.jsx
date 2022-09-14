import React from "react";

function Chart({ color = "#718096" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.37145 10.2017V17.0619"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0381 6.91913V17.0618"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6285 13.8268V17.0619"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Chart;
