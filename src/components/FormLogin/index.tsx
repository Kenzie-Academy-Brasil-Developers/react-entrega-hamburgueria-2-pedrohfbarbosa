import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { UserContext } from "../../providers/UserContext";
import { FormStyled } from "../../styles/FormStyled";
import { LoginWrapperStyled } from "./LoginWrapperStyled";
import { InputStyled } from "../../styles/InputStyled";
import { ButtonStyled } from "../../styles/ButtonStyled";
import { HeadingThree, Text } from "../../styles/Typography";
import { LinkStyled } from "../../styles/LinkStyled";
import { IDataLogin } from "../../providers/UserContext/interfaces";
import { Spinner } from "../Spinner";

export const FormLogin = () => {
  const { handleLogin, loadingForm } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataLogin>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onsubmit: SubmitHandler<IDataLogin> = async (data) => {
    await handleLogin(data);
  };

  return (
    <LoginWrapperStyled>
      <div>
        <HeadingThree>Login</HeadingThree>
      </div>

      <FormStyled onSubmit={handleSubmit(onsubmit)}>
        <fieldset>
          <InputStyled
            placeholder=" "
            type="email"
            id="email"
            register={register("email")}
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
            placeholder=" "
            type="password"
            id="password"
            register={register("password")}
          />

          <label htmlFor="password">Digite sua senha</label>

          {errors.password && (
            <Text fontSize="size6" color="secondary">
              {errors.password.message}
            </Text>
          )}
        </fieldset>

        <ButtonStyled width="100%" type="submit" disabled={loadingForm}>
          {loadingForm ? <Spinner small={true} /> : "Logar"}
        </ButtonStyled>

        <Text fontSize="size5" color="gray50" textCenter>
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </Text>

        <LinkStyled color="gray50" bg="gray0" width="100%" to="/register">
          Cadastrar
        </LinkStyled>
      </FormStyled>
    </LoginWrapperStyled>
  );
};
