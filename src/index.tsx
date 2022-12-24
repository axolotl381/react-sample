import React from "react";
import ReactDOM from "react-dom/client";

import TodoApp from "./component/TodoApp";
import reportWebVitals from "./reportWebVitals";
import LinkButton from "./component/linkButton";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoApp />
    <LinkButton url="https:google.com" text="google"></LinkButton>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
