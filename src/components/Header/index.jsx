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
  const { handleModalCart, totalItems } = useContext(CartContext);

  return (
    <HeaderStyled>
      <Container>
        <Logo />
        <div>
          <InputSearch />

          <div>
            <ButtonHeader onClick={handleModalCart}>
              <AiOutlineShoppingCart />
              <span>{totalItems}</span>
            </ButtonHeader>

            <ButtonHeader onClick={handleLogout}>
              <FiLogOut />
            </ButtonHeader>
          </div>
        </div>
      </Container>
    </HeaderStyled>
  );
};
