import React, { useState } from "react";
import Mybutton from "./Mybutton";

import "./style.css";

type styleState = {
  fontColor?: string;
  textDecorationLine?:
    | "none"
    | "underline"
    | "overline"
    | "line-through"
    | "blink"
    | "spelling-error"
    | "grammar-error";
  padding?: string;
  border?: string;
};

type Props = {
  url: string;
  text?: string;
} & styleState;

const LinkButton: React.FC<Props> = (props) => {
  const { url, text, fontColor, textDecorationLine, padding, border } = props;
  const srtyy = {
    color: fontColor === undefined ? "black" : fontColor,
    textDecorationLine:
      textDecorationLine === undefined ? "none" : textDecorationLine,
    padding: padding === undefined ? "5px" : padding,
    border: border === undefined ? "2px solid black" : border,
  };
  return (
    <>
      <a className="aa" href={url} style={srtyy}>
        <Mybutton as="span">{text !== undefined ? text : "NoText"}</Mybutton>
      </a>
    </>
  );
};

export default LinkButton;
