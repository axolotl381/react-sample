import React, { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

type UserPersonal = {
  name: string | null;
  age: number | null;
};

type RegisterFunc = {
  register: ((name: string, age: number) => void) | null;
};

type User = UserPersonal & RegisterFunc;

const userContext = createContext<User>({
  name: null,
  age: null,
  register: null,
});

const useInfo = () => {
  //contextとそれら以外を含めたreturnを実施するための関数
  const context = useContext<User>(userContext);
  return context;
};

const ContextSample: React.FC<{ children: ReactNode }> = (props) => {
  const [userName, setUserName] = useState<string | null>(null);
  const [userAge, setUserAge] = useState<number | null>(null);

  const setUserInfo = (name: string, age: number) => {
    setUserName(name);
    setUserAge(age);
  };

  const userInfo = {
    name: userName,
    age: userAge,
    register: setUserInfo,
  };

  return (
    <userContext.Provider value={userInfo}>
      {props.children}
    </userContext.Provider>
  );
};

export { ContextSample, useInfo, userContext };
