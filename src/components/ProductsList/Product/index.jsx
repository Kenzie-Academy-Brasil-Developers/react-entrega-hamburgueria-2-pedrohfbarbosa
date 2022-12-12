import React, { useContext } from "react";
import { ProductStyled } from "./ProductStyled";
import { ButtonStyled } from "../../../styles/ButtonStyled";
import { HeadingThree } from "../../../styles/Typography";
import { Text } from "../../../styles/Typography";
import { CartContext } from "../../../providers/CartContext";

export const Product = ({ product }) => {
  const { handleAddToCart } = useContext(CartContext);
  return (
    <ProductStyled>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <div>
        <HeadingThree>{product.name}</HeadingThree>
        <Text fontSize="size6" color="gray50">
          {product.category}
        </Text>
        <Text fontWeight="600" fontSize="size5" color="primary">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </Text>
        <ButtonStyled
          height="medium"
          handleClick={() => handleAddToCart(product)}
        >
          Adicionar
        </ButtonStyled>
      </div>
    </ProductStyled>
  );
};
