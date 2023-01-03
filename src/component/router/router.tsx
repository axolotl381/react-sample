import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoApp from "../TodoApp";
import Home from "../Home";
import Test from "../Test/test";

const Router: React.FC = () => {
  return (
    <div className="Router">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todoapp" element={<TodoApp />} />
        <Route path="/test" element={<Test showFlag={false}></Test>}></Route>
      </Routes>
    </div>
  );
};

export default Router;
