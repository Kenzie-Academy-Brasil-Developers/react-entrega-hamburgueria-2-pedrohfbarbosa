import { Logo } from "../Header/Logo";
import { ToastMainPage } from "./ToastMainPage";
import imgDots from "../../assets/img/GroupDots.svg";
import { AsideStyled } from "./AsideStyled";

export const AsideMainPages = () => {
  return (
    <AsideStyled>
      <Logo />
      <ToastMainPage />
      <figure>
        <img src={imgDots} alt="Dots" />
      </figure>
    </AsideStyled>
  );
};
