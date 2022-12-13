import React, { useContext } from "react";
import { Product } from "./Product";
import { ProductsListStyled } from "./ProductsListStyled";
import { HeadingTwo } from "../../styles/Typography";
import { Text } from "../../styles/Typography";
import { UserContext } from "../../providers/UserContext";


export const ProductsList = () => {
  const { filteredWord, products, filteredProducts } = useContext(UserContext);
  
  return (
    <ProductsListStyled>
      {filteredWord && (
        <HeadingTwo>
          Resultados para:{" "}
          <Text fontWeight="700" fontSize="size2" color="gray50">
            {filteredWord}
          </Text>
        </HeadingTwo>
      )}
      <ul>
        {filteredProducts
          ? filteredProducts
              .filter((e) => e.name)
              .map((e) => <Product key={e.id} product={e} />)
          : products
              .filter((e) => e.name)
              .map((e) => <Product key={e.id} product={e} />)}
      </ul>
    </ProductsListStyled>
  );
};
