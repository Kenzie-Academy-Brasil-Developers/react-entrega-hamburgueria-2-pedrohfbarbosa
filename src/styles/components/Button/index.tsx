import React from "react";

interface IPropsButton {
  handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  className?: string | undefined;
  disabled?: boolean | undefined;
}

export const Button = ({
  handleClick,
  type,
  children,
  className,
  disabled,
}: IPropsButton) => {
  return (
    <button
      disabled={disabled}
      className={className}
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  );
};
