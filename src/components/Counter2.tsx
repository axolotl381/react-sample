import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";

type Action = "DECREMENT" | "INCREMENT" | "DOUBLE" | "RESET";

//現在の状態とactionに基づいて次の状態を返却

const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case "INCREMENT":
      return currentCount + 1;
    case "DECREMENT":
      return currentCount - 1;
    case "DOUBLE":
      return currentCount * 2;
    case "RESET":
      return 0;
    default:
      return currentCount;
  }
};

type CounterProps = {
  initialValue: number;
};

const Counter = (props: CounterProps) => {
  const { initialValue } = props;
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={() => dispatch("DECREMENT")}>-</button>
    </div>
  );
};
export default Counter;
