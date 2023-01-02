import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./component/router/router";
import TodoApp from "./component/TodoApp";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import LinkButton from "./component/linkButton";
import CompoRegister from "./component/context";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <div>HEADER</div>
        <Router />
        <div>FOOTER</div>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
