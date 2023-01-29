import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./component/router/router";
import Body from "./component/Body";
import ContextProvider from "./component/context/Context";
import SideBarChakraUI from "./component/SideBar/SIdeBarChakraUI";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <ChakraProvider>
            {/* <Sidebar /> */}
            <SideBarChakraUI></SideBarChakraUI>
            {/* <Body /> */}
            {/* <Router /> */}
            {/* <div>FOOTER</div> */}
          </ChakraProvider>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
