import { Button, Link, Text } from "@chakra-ui/react";

import React, { useState } from "react";

type Props = {
  showFlag: boolean;
};

const Test: React.FC<Props> = (props) => {
  return <>{props.showFlag ? <div className="overlay"></div> : <></>}</>;
};

export default Test;
