import { AsideMainPages } from "../../components/AsideMainPages";
import { FormLogin } from "../../components/FormLogin";

import { Container } from "../../styles/Container";
import { LoginPageStyled } from "./LoginStyled";

export const Login = () => {
  return (
    <LoginPageStyled>
      <Container>
        <AsideMainPages />
        <FormLogin />
      </Container>
    </LoginPageStyled>
  );
};
