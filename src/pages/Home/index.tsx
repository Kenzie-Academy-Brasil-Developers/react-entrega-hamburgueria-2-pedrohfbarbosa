import React, { useContext } from "react";
import { Container } from "../../styles/Container";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/ProductsList";
import { Cart } from "../../components/Cart";
import { HomeStyled } from "./HomeStyled";
import { CartContext } from "../../providers/CartContext";

export const Home = () => {
  const { modalCart } = useContext(CartContext);

  return (
    <HomeStyled>
      <Header />

      <Container>
        <ProductsList />

        {modalCart && <Cart />}
      </Container>
    </HomeStyled>
  );
};
