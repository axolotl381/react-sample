import InputTodo from "./InputTodo";
import Filter from "./Filter";

import Todo from "./Todo";
import { useState } from "react";

const getKey = (): string => Math.random().toString(32).substring(2);

type typeTodo = {
  key: string;
  text: string;
  done: boolean;
};
type FilterStatus = "ALL" | "TODO" | "DONE";

const TodoApp: React.FC = () => {
  const [todos, setToDos] = useState<typeTodo[]>([]);
  const [filter, setFilter] = useState<FilterStatus>("ALL");

  const handleAdd = (t: string): void => {
    setToDos([...todos, { key: getKey(), text: t, done: false }]);
  };

  const handleFilterChange = (value: FilterStatus) => {
    setFilter(value);
  };

  const displayToDos = todos.filter((todo: typeTodo): boolean => {
    if (filter === "ALL") {
      console.log(todo);
      return true;
    }
    if (filter === "TODO") {
      return !todo.done;
    }
    if (filter === "DONE") {
      return todo.done;
    }

    return false;
  });

  const handleCheck = (checked: typeTodo) => {
    setInterval(() => {});
    const newTodos = todos.map((todo) => {
      console.log("更新前");
      console.log(todos);

      if (todo.key === checked.key) {
        console.log("状態の変更を実施");
        todo.done = !todo.done;
      }
      console.log("更新後");
      console.log(todos);

      return todo;
    });
    setToDos(newTodos);
  };

  return (
    <div>
      {displayToDos.map((todo) => (
        <Todo key={todo.key} todo={todo} onCheck={handleCheck}></Todo>
      ))}
      <InputTodo onAdd={handleAdd} />
      <Filter onChange={handleFilterChange} value={filter} />
    </div>
  );
};

export default TodoApp;
