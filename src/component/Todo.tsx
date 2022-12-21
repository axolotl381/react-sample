import React from "react";

type typeTodo = {
  key: string;
  text: string;
  done: boolean;
};

type Props = {
  key: string;
  todo: typeTodo;
  onCheck: (s: typeTodo) => void;
};

export const Todo: React.FC<Props> = (props) => {
  const { todo, onCheck } = props;

  const handleChange = () => {
    onCheck(todo);
  };

  return (
    <label>
      <input type="checkbox" checked={todo.done} onChange={handleChange} />
      <span>{todo.text}</span>
    </label>
  );
};

export default Todo;
