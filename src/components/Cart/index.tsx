import { useEffect, useRef, useContext } from "react";
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
import { CartContext } from "../../providers/CartContext";
import { ButtonHeader } from "../Header/HeaderStyled";

export const Cart = () => {
  const { currentSale, setModalCart } = useContext(CartContext);

  const ref = useRef<HTMLDivElement | null>(null);

  const handleOutClick = (e: MouseEvent) => {
    if (!ref.current) {
      return;
    }

    const target = e.target as HTMLDivElement;

    if (!ref.current.contains(target)) {
      setModalCart(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const handleClick = () => {
    setModalCart(false);
  };

  return (
    <Modal>
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
