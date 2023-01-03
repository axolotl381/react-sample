import React, { useContext, useRef } from "react";
import { GlobalContext } from "./context/Context";
import { Button } from "@chakra-ui/react";

const Home: React.FC = () => {
  const { isShow, changeIsShow } = useContext(GlobalContext);
  return (
    <div>
      <Button
        onClick={(e) => {
          changeIsShow();
        }}
      >
        {isShow ? "CLOSE" : "OPEN"}
      </Button>
    </div>
  );
};

export default Home;
