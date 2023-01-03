import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Sidebar from "./component/SideBar/SideBar";
import Body from "./component/Body";
import Router from "./component/router/router";
import ContextProvider from "./component/context/Context";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <ChakraProvider>
            <Sidebar />
            <Router />
            {/* <div>FOOTER</div> */}
          </ChakraProvider>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
