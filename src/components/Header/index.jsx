import React, { useContext } from "react";
import { HeaderStyled, ButtonHeader } from "./HeaderStyled";
import { Logo } from "./Logo";
import { InputSearch } from "./InputSearch";
import { Container } from "../../styles/Container";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { UserContext } from "../../providers/UserContext";
import { CartContext } from "../../providers/CartContext";

export const Header = () => {
  const { handleLogout } = useContext(UserContext);
  const { handleModalCart } = useContext(CartContext);

  return (
    <HeaderStyled>
      <Container>
        <Logo />
        <div>
          <InputSearch />
          <ButtonHeader onClick={handleModalCart}>
            <AiOutlineShoppingCart />
          </ButtonHeader>
          
          <ButtonHeader onClick={handleLogout}>
            <FiLogOut />
          </ButtonHeader>
        </div>
      </Container>
    </HeaderStyled>
  );
};
