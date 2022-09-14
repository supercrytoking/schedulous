import React from "react";

function More({ color = "#718096" }) {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 13.3333A.6666.6666 0 1 0 8 12a.6667.6667 0 0 0 0 1.3333ZM8 8.6667a.6667.6667 0 1 0 0-1.3334.6667.6667 0 0 0 0 1.3334ZM8 4a.6667.6667 0 1 0 0-1.3334A.6667.6667 0 0 0 8 4Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default More;
