import React from "react";

export const Input = ({
  handleChange,
  type,
  placeholder,
  name,
  value,
  className,
  register
}) => {
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
