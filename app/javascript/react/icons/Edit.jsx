import React from "react";

function Edit({ color = "#718096" }) {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g
        clipPath="url(#a)"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.3332 2.6667H2.6666A1.3333 1.3333 0 0 0 1.3333 4v9.3333a1.3333 1.3333 0 0 0 1.3333 1.3334h9.3333c.3536 0 .6928-.1405.9428-.3906.2501-.25.3906-.5892.3906-.9428V8.6667" />
        <path d="M12.3333 1.6667a1.4141 1.4141 0 1 1 2 2L7.9999 10l-2.6667.6667L6 8l6.3334-6.3333Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Edit;
