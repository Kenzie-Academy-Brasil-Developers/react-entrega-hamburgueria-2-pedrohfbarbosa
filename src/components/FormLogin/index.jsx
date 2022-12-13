import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const FormLogin = () => {
  const { handleLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <div>
        <h3>Login</h3>
      </div>

      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </fieldset>

        <fieldset>
          <label htmlFor="password">Digite sua senha</label>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </fieldset>

        <button type="submit">Logar</button>
        <Link to="/register">Cadastrar</Link>
      </form>
    </div>
  );
};
