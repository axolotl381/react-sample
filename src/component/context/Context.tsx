import React, { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

type contextType = {
  isShow: boolean;
  changeIsShow: () => void;
};

type Props = {
  children: ReactNode;
};

const GlobalContext = createContext<contextType>({} as contextType);

const ContextProvider: React.FC<Props> = (props) => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const changeIsShow = () => {
    setIsShow(!isShow);
  };

  const contextValue = {
    isShow: isShow,
    changeIsShow: changeIsShow,
  };
  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
export { GlobalContext };
