import React, { useContext, useRef } from "react";
import { ContextSample, useInfo, userContext } from "./ContextSample";

const Register: React.FC = () => {
  // const { name, age, register } = useContext(userContext);
  const { name, age, register } = useInfo();

  const inputNameEl = useRef<HTMLInputElement>(null);
  const inputAgeEl = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input ref={inputNameEl} type="text" placeholder="name"></input>
      <br />
      <input ref={inputAgeEl} type="number" placeholder="age"></input>
      <br />
      <button
        onClick={() => {
          if (
            register !== null &&
            inputNameEl.current !== null &&
            inputAgeEl.current !== null
          ) {
            if (
              inputAgeEl.current.value !== "" &&
              inputNameEl.current.value !== ""
            ) {
              register(
                inputNameEl.current.value,
                Number(inputAgeEl.current.value)
              );
              console.log("register実行");
            }
          }
        }}
      >
        Register
      </button>
      <p> NAME : {name !== null ? name : ""} </p>{" "}
      <p>AGE : {age !== null ? age : ""} </p>
    </div>
  );
};

export default Register;
