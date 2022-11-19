import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import Hello from "./components/Hello";
import Message from "./components/Message";
import Parent from "./components/ Container Sample";
import Clock from "./components/Clock";
import { Clock2 } from "./components/Clock2";
// import reportWebVitals from "./reportWebVitals";
// import Counter from "./components/Counter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Hello /> */}
    {/* <Clock /> */}
    {/* <Counter initialValue={0} /> */}
    {/* <Message /> */}
    {/* <Parent /> */}
    <Clock2 />
  </React.StrictMode>
);
