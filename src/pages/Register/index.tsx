import { AsideMainPages } from "../../components/AsideMainPages";
import { ToastMainPage } from "../../components/AsideMainPages/ToastMainPage";
import { FormRegister } from "../../components/FormRegister";
import { Logo } from "../../components/Header/Logo";
import { Container } from "../../styles/Container";
import { RegisterStyled } from "./RegisterStyled";

export const Register = () => {
  return (
    <RegisterStyled>
      <Container>
        <AsideMainPages />
        <div>
          <div>
            <Logo />
            <ToastMainPage />
          </div>
          <FormRegister />
        </div>
      </Container>
    </RegisterStyled>
  );
};
