import InputTodo from "./InputTodo";
import Filter from "./Filter";

import Todo from "./ToDo";
import { useState } from "react";

const getKey = (): string => Math.random().toString(32).substring(2);

type TodoType = {
  key: string;
  text: string;
  done: boolean;
};
type FilterStatus = "ALL" | "TODO" | "DONE";

const TodoApp: React.FC = () => {
  const [todos, setToDos] = useState<TodoType[]>([]);
  const [filter, setFilter] = useState<FilterStatus>("ALL");

  const handleAdd = (t: string): void => {
    setToDos([...todos, { key: getKey(), text: t, done: false }]);
  };

  const handleFilterChange = (value: FilterStatus) => {
    setFilter(value);
  };

  const displayToDos = todos.filter((todo: TodoType): boolean => {
    if (filter === "ALL") return true;
    if (filter === "TODO") return !todo.done;
    if (filter === "DONE") return todo.done;
    return false;
  });

  const handleCheck = (checked: TodoType) => {
    const newTodos = todos.map((todo) => {
      if (todo.key === checked.key) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setToDos(newTodos);
  };

  return (
    <div>
      {displayToDos.map((todo) => (
        <Todo key={todo.key} todo={todo} onCheck={handleCheck}></Todo>
      ))}
      <InputTodo />
      <Filter />
    </div>
  );
};

export default TodoApp;
