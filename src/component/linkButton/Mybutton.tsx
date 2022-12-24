import React, { ReactNode } from "react";
import "./style.css";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  tabIndex?: number;
  type?: "submit" | "reset" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  as?: "span";
};

export const Mybutton: React.FC<Props> = (props) => {
  const { children, tabIndex, disabled, type, onClick, as } = props;
  return as !== "span" ? (
    <div>
      <button
        className={styleButton}
        disabled={disabled}
        type={type}
        tabIndex={tabIndex}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  ) : (
    <span>{children}</span>
  );
};

const styleButton = "Mybuttoncss";

export default Mybutton;
