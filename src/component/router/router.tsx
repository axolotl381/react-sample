import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoApp from "../TodoApp";
import Register from "../context/UserRegister";

const Router: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/" element={<TodoApp />} />
        <Route path="/" element={<TodoApp />} />
      </Routes>
    </>
  );
};

export default Router;
