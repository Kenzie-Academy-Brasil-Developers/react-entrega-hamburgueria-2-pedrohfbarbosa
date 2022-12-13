import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const FormRegister = () => {
  const {handleRegister} = useContext(UserContext)

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
        <h3>Cadastro</h3>
        <Link to="/">Retornar para o login</Link>
      </div>

      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </fieldset>

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

        <fieldset>
          <label htmlFor="confirmPassword">Confirme sua senha</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </fieldset>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};
