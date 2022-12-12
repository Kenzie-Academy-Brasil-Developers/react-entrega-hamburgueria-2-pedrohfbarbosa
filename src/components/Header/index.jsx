import React from "react";
import { HeaderStyled } from "./HeaderStyled";
import { Logo } from "./Logo";
import { InputSearch } from "./InputSearch";
import { Container } from "../../styles/Container";

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Logo />
        <InputSearch />
      </Container>
    </HeaderStyled>
  );
};
