import React from "react";
import { CartProduct } from "./CartProduct";
import { CartTotal } from "./CartTotal";
import { CartStyled } from "./CartStyled";
import { HeadingThree } from "../../styles/Typography";
import { Text } from "../../styles/Typography";
import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";

export const Cart = () => {
  const { currentSale } = useContext(CartContext);

  return (
    <CartStyled>
      <div className="cartTitle">
        <HeadingThree color="white">Carrinho de compras</HeadingThree>
      </div>
      {currentSale.length === 0 ? (
        <div className="emptyCart">
          <HeadingThree>Sua sacola está vazia</HeadingThree>
          <Text fontSize="size5">Adicione itens</Text>
        </div>
      ) : (
        <div>
          <ul className="cartProducts">
            {currentSale.map((e) => (
              <CartProduct key={e.id} product={e} />
            ))}
          </ul>
          <CartTotal />
        </div>
      )}
    </CartStyled>
  );
};
