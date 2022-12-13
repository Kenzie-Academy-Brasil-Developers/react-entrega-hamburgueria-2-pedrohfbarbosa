import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { FormStyled } from "../../styles/FormStyled";
import { LoginWrapperStyled } from "./LoginWrapperStyled";
import { InputStyled } from "../../styles/InputStyled";
import { ButtonStyled } from "../../styles/ButtonStyled";
import { HeadingThree, Text } from "../../styles/Typography";
import { LinkStyled } from "../../styles/LinkStyled";

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
    <LoginWrapperStyled>
      <div>
        <HeadingThree>Login</HeadingThree>
      </div>

      <FormStyled onSubmit={handleSubmit(handleLogin)}>
        <fieldset>
          <InputStyled
            type="email"
            name="email"
            placeholder=""
            {...register("email")}
          />
          <label htmlFor="email">Email</label>
          {errors.email && (
            <Text fontSize="size6" color="secondary">
              {errors.email.message}
            </Text>
          )}
        </fieldset>

        <fieldset>
          <InputStyled
            type="password"
            name="password"
            placeholder=""
            {...register("password")}
          />
          <label htmlFor="password">Digite sua senha</label>
          {errors.password && (
            <Text fontSize="size6" color="secondary">
              {errors.password.message}
            </Text>
          )}
        </fieldset>

        <ButtonStyled width="100%" type="submit">
          Logar
        </ButtonStyled>
        <LinkStyled color="gray50" bg="gray0" width="100%" to="/register">
          Cadastrar
        </LinkStyled>
      </FormStyled>
    </LoginWrapperStyled>
  );
};
