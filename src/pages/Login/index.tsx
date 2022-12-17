import { AsideMainPages } from "../../components/AsideMainPages";
import { ToastMainPage } from "../../components/AsideMainPages/ToastMainPage";
import { FormLogin } from "./FormLogin";
import { Logo } from "../../components/Header/Logo";
import { Container } from "../../styles/Container";
import { LoginPageStyled } from "./LoginStyled";

export const Login = () => {
  return (
    <LoginPageStyled>
      <Container>
        <div>
          <div>
            <Logo />

            <ToastMainPage />
          </div>

          <FormLogin />
        </div>

        <AsideMainPages />
      </Container>
    </LoginPageStyled>
  );
};
