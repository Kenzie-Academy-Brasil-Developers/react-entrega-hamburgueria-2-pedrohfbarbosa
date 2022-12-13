import React from "react";
import { CartProduct } from "./CartProduct";
import { CartTotal } from "./CartTotal";
import { CartProducts, CartStyled, CartTitle, EmptyCart } from "./CartStyled";
import { HeadingThree } from "../../styles/Typography";
import { Text } from "../../styles/Typography";
import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";

export const Cart = () => {
  const { currentSale } = useContext(CartContext);

  return (
    <CartStyled>
      <CartTitle>
        <HeadingThree color="white">Carrinho de compras</HeadingThree>
      </CartTitle>
      {currentSale.length === 0 ? (
        <EmptyCart>
          <HeadingThree>Sua sacola está vazia</HeadingThree>
          <Text fontSize="size5">Adicione itens</Text>
        </EmptyCart>
      ) : (
        <div>
          <CartProducts>
            {currentSale.map((e) => (
              <CartProduct key={e.id} product={e} />
            ))}
          </CartProducts>
          <CartTotal />
        </div>
      )}
    </CartStyled>
  );
};
