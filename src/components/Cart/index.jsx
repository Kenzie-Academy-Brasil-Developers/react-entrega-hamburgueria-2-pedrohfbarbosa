import React, { useRef } from "react";
import { CartProduct } from "./CartProduct";
import { CartTotal } from "./CartTotal";
import {
  CartProducts,
  CartStyled,
  CartTitle,
  EmptyCart,
  Modal,
} from "./CartStyled";
import { HeadingThree } from "../../styles/Typography";
import { Text } from "../../styles/Typography";
import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { ButtonHeader } from "../Header/HeaderStyled";

export const Cart = () => {
  const { currentSale, setModalCart } = useContext(CartContext);

  const ref = useRef(null);

  const handleOutClick = (e) => {
    if (!ref.current.contains(e.target)) {
      setModalCart(null);
    }
  };

  const handleClick = () => {
    setModalCart(null);
  };

  return (
    <Modal onClick={handleOutClick}>
      <CartStyled ref={ref}>
        <CartTitle>
          <HeadingThree color="white">Carrinho de compras</HeadingThree>
          <ButtonHeader onClick={handleClick}>x</ButtonHeader>
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
    </Modal>
  );
};
