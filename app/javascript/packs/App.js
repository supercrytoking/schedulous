import React from "react";
import ReactDOM from "react-dom/client";
import Router from "~/Router";

document.addEventListener("DOMContentLoaded", () => {
  const reactElement = document.getElementById("react-app");
  const root = ReactDOM.createRoot(reactElement);

  root.render(<Router />);
});
