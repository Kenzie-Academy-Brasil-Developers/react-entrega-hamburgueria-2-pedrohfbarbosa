import React from "react";
import { Container } from "../../styles/Container";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/ProductsList";
import { Cart } from "../../components/Cart";
import { HomeStyled } from "./HomeStyled";

export const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <Container>
        <ProductsList />
        <Cart />
      </Container>
    </HomeStyled>
  );
};
