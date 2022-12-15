import React from "react";
import { LogoStyled } from "./LogoStyled";
import { HeadingOne } from "../../../styles/Typography";
import { Text } from "../../../styles/Typography";
import { UserContext } from "../../../providers/UserContext";
import { useContext } from "react";

export const Logo = () => {
  const { resetToAllProducts } = useContext(UserContext);

  return (
    <LogoStyled onClick={resetToAllProducts}>
      <HeadingOne>
        Burger{" "}
        <Text fontWeight="700" fontSize="size3" color="secondary">
          Kenzie
        </Text>
      </HeadingOne>
    </LogoStyled>
  );
};
