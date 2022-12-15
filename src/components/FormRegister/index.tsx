import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { UserContext } from "../../providers/UserContext";
import { HeadingThree, Text } from "../../styles/Typography";
import { LinkStyled } from "../../styles/LinkStyled";
import { RegisterWrapperStyled } from "./RegisterWrapperStyled";
import { FormStyled } from "../../styles/FormStyled";
import { InputStyled } from "../../styles/InputStyled";
import { ButtonStyled } from "../../styles/ButtonStyled";
import { IDataRegister } from "../../providers/UserContext/interfaces";
import { Spinner } from "../Spinner";

export const FormRegister = () => {
  const { handleRegister, loadingForm } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataRegister>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<IDataRegister> = async (data) => {
    await handleRegister(data);
  };

  return (
    <RegisterWrapperStyled>
      <div>
        <HeadingThree>Cadastro</HeadingThree>

        <LinkStyled to="/" registerlink="true">
          Retornar para o login
        </LinkStyled>
      </div>

      <FormStyled onSubmit={handleSubmit(submit)}>
        <fieldset>
          <InputStyled
            placeholder=" "
            type="text"
            id="name"
            register={register("name")}
          />

          <label htmlFor="name">Nome</label>

          {errors.name && (
            <Text fontSize="size6" color="secondary">
              {errors.name.message}
            </Text>
          )}
        </fieldset>

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

        <fieldset>
          <InputStyled
            placeholder=" "
            type="password"
            id="confirmPassword"
            register={register("confirmPassword")}
          />

          <label htmlFor="confirmPassword">Confirme sua senha</label>

          {errors.confirmPassword && (
            <Text fontSize="size6" color="secondary">
              {errors.confirmPassword.message}
            </Text>
          )}
        </fieldset>

        <ButtonStyled
          color="gray50"
          bg="gray0"
          hover
          width="100%"
          type="submit"
          disabled={loadingForm}
        >
          {loadingForm ? <Spinner small={true} /> : "Cadastrar"}
        </ButtonStyled>
      </FormStyled>
    </RegisterWrapperStyled>
  );
};
