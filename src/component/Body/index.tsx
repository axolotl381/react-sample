import React from "react";
import LineChart from "../chartComponent/LineChart";
import SliderTest from "../Slider";

const Body: React.FC = () => {
  return (
    <div className="Mainbody" style={{ height: "50%" }}>
      <p>main body</p>
      <LineChart></LineChart>
      <SliderTest></SliderTest>
    </div>
  );
};

export default Body;
