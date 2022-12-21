import React from "react";
import "./style.css";

export const Filter: React.FC = (props) => {
  return (
    <div>
      <a className="fil-gr-a" href="/">
        ALL
      </a>
      <a className="fil-gr-a" href="/">
        Todo
      </a>
      <a className="fil-gr-a" href="/">
        Done
      </a>
    </div>
  );
};

export default Filter;
