import React from "react";
import { ContextSample } from "./ContextSample";
import Register from "./UserRegister";

const CompoRegister: React.FC = () => {
  return (
    <ContextSample>
      <Register />
    </ContextSample>
  );
};

export default CompoRegister;
