import React from "react";
import { CartTotalStyled } from "./CartTotalStyled";
import { ButtonStyled } from "../../../styles/ButtonStyled";
import { HeadingFour } from "../../../styles/Typography";
import { Text } from "../../../styles/Typography";
import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";

export const CartTotal = () => {
  const { totalPrice, clearCard } = useContext(CartContext);
  return (
    <CartTotalStyled>
      <div>
        <HeadingFour>Total</HeadingFour>
        <Text color="gray50" fontWeight="600" fontSize="size5">
          {totalPrice}
        </Text>
      </div>
      <ButtonStyled
        handleClick={clearCard}
        height
        hover
        width="100%"
        color="gray50"
        bg="gray20"
      >
        Remover todos
      </ButtonStyled>
    </CartTotalStyled>
  );
};
