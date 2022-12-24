import React from "react";
import "./style.css";

type Props = {
  value: "ALL" | "TODO" | "DONE";
  onChange: (s: "ALL" | "TODO" | "DONE") => void;
};

export const Filter: React.FC<Props> = (props) => {
  const { value, onChange } = props;
  const handleClick = (
    key: "ALL" | "TODO" | "DONE",
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    onChange(key);
  };
  return (
    <div>
      <a className="fil-gr-a" href="/" onClick={(e) => handleClick("ALL", e)}>
        ALL
      </a>
      <a className="fil-gr-a" href="/" onClick={(e) => handleClick("TODO", e)}>
        Todo
      </a>
      <a className="fil-gr-a" href="/" onClick={(e) => handleClick("DONE", e)}>
        Done
      </a>
    </div>
  );
};

export default Filter;
