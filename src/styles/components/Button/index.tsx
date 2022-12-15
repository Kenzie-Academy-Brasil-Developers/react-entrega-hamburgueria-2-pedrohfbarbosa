import React from "react";

interface IPropsButton {
  handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  className?: string | undefined;
}

export const Button = ({
  handleClick,
  type,
  children,
  className,
}: IPropsButton) => {
  return (
    <button className={className} onClick={handleClick} type={type}>
      {children}
    </button>
  );
};
