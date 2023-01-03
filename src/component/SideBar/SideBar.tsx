import React, { useState, useContext } from "react";
import { SideBarData } from "./SideBarData";
import { MdOpenInFull } from "react-icons/md";
import { GlobalContext } from "../context/Context";

const Sidebar: React.FC = () => {
  const { isShow, changeIsShow } = useContext(GlobalContext);
  return (
    <div
      className={isShow ? "Sidebar__active" : "Sidebar__disactive"}
      onClick={(e) => {
        console.log(e.target);
        console.log(e.currentTarget);
        if (e.target !== e.currentTarget) changeIsShow();
        //   console.log(isShow);
      }}
    >
      <div className="OpenCloseWindow">
        <MdOpenInFull />
      </div>

      <ul className="SidebarList">
        {SideBarData.map((value, key) => {
          return (
            <a href={value.link}>
              <li key={key} className="row">
                <div id="icon">{value.icon}</div>
                <div id={isShow ? "title" : "title__disactive"}>
                  {value.title}
                </div>
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
function usestate(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
