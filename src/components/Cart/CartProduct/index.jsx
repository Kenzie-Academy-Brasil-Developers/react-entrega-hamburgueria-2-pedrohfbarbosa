import React from "react";
import { CartProductStyled } from "./CartProductStyled";
import { ButtonStyled } from "../../../styles/ButtonStyled";
import { HeadingFour } from "../../../styles/Typography";
import { Text } from "../../../styles/Typography";
import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";

export const CartProduct = ({ product }) => {
  const { handleRemoveFromCart } = useContext(CartContext);

  return (
    <CartProductStyled>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <div>
        <div>
          <HeadingFour>{product.name}</HeadingFour>
          <Text color="gray50" fontSize="size6">
            {product.category}
          </Text>
        </div>
        <ButtonStyled
          color="gray100"
          handleClick={() => handleRemoveFromCart(product.id)}
        >
          Remover
        </ButtonStyled>
      </div>
    </CartProductStyled>
  );
};
