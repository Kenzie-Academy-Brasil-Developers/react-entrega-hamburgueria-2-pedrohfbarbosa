import React from "react";
import { ButtonsWrapperStyled, CartProductStyled } from "./CartProductStyled";
import { ButtonStyled } from "../../../styles/ButtonStyled";
import { HeadingFour } from "../../../styles/Typography";
import { Text } from "../../../styles/Typography";
import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";
import { ICartProducts } from "../../../providers/CartContext/interfaces";

interface ICartProduct {
  product: ICartProducts;
}

export const CartProduct = ({ product }: ICartProduct) => {
  const { handleRemoveFromCart, handleRemoveOneItem, handleAddOneItem } =
    useContext(CartContext);

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

        <ButtonsWrapperStyled>
          <ButtonStyled
            color="gray50"
            handleClick={() => handleRemoveFromCart(product.id)}
          >
            Remover
          </ButtonStyled>

          <div>
            <ButtonStyled
              handleClick={() => handleRemoveOneItem(product.id)}
              color="gray50"
            >
              -
            </ButtonStyled>

            <Text color="gray100" fontSize="size6">
              {product.quantity}
            </Text>

            <ButtonStyled
              handleClick={() => handleAddOneItem(product.id)}
              color="gray50"
            >
              +
            </ButtonStyled>
          </div>
        </ButtonsWrapperStyled>
      </div>
    </CartProductStyled>
  );
};
