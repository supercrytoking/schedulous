import React from "react";

function Tasks({ color = "#718096" }) {
  return (
    <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.75 5.4167H7.5834a2.1667 2.1667 0 0 0-2.1667 2.1666v13A2.1666 2.1666 0 0 0 7.5834 22.75h10.8333a2.167 2.167 0 0 0 2.1667-2.1667v-13a2.1668 2.1668 0 0 0-2.1667-2.1666H16.25m-6.5 0a2.1667 2.1667 0 0 0 2.1667 2.1666h2.1667A2.1665 2.1665 0 0 0 16.25 5.4167m-6.5 0A2.1667 2.1667 0 0 1 11.9167 3.25h2.1667A2.1665 2.1665 0 0 1 16.25 5.4167M13 13h3.25M13 17.3333h3.25M9.75 13h.0108M9.75 17.3333h.0108"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Tasks;
