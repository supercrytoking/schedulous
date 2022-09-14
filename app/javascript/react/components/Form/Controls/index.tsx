import React from "react";

const CONTROLS = {
  undefined: (props) => <input type="text" {...props} />,
  text: (props) => <input type="text" {...props} />,
  number: (props) => <input type="number" {...props} />,
  password: (props) => <input type="password" {...props} />,
  email: (props) => <input type="email" {...props} />,
  textarea: (props) => <textarea type="email" {...props} />,
  hidden: (props) => <input type="hidden" {...props} />,
};

export default CONTROLS;
