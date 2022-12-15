import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IPropsInput {
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string | undefined;
  name?: string | undefined;
  value?: string | undefined;
  className?: string | undefined;
  register?: UseFormRegisterReturn;
  id?: string | undefined;
}

export const Input = ({
  handleChange,
  type,
  placeholder,
  name,
  value,
  className,
  register,
  id,
}: IPropsInput) => {
  return (
    <>
      <input
        id={id}
        onChange={handleChange}
        type={type || "text"}
        placeholder={placeholder}
        name={name}
        value={value}
        className={className}
        {...register}
      />
    </>
  );
};
