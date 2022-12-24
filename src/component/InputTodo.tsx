import React, { useState } from "react";

type Props = {
  onAdd: (s: string) => void;
};

export const InputTodo: React.FC<Props> = (props) => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    console.log(e.target.value + " " + e.target.type);
  };
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // console.log(e.key);
    if (e.key === "Enter") {
      if (!text.match(/^$/)) {
        props.onAdd(text);
        setText("");
      }
    }
  };

  return (
    <div className="panel-block">
      <input
        type="text"
        placeholder="Enter to add"
        value={text}
        onChange={handleChange}
        onKeyDown={handleEnter}
      ></input>
    </div>
  );
};

export default InputTodo;
