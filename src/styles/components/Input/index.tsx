import React from "react";

interface IPropsInput {
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder: string | undefined;
  name: string | undefined;
  value: string | undefined;
  className: string | undefined;
  register: any;
}

export const Input = ({
  handleChange,
  type,
  placeholder,
  name,
  value,
  className,
  register,
}: IPropsInput) => {
  return (
    <>
      <input
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
