import React, { useState } from "react";
import { FormStyled } from "./InputSearchStyled";
import { ButtonStyled } from "../../../styles/ButtonStyled";
import { InputStyled } from "../../../styles/InputStyled";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const InputSearch = () => {
  const { handleSearch } = useContext(UserContext);
  const [inputSearch, setInputSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputSearch);
    setInputSearch("");
  };

  const handleChange = (e) => setInputSearch(e.target.value);

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        handleChange={handleChange}
        name="inputSearch"
        placeholder="Digitar pesquisa"
        value={inputSearch}
      />

      <ButtonStyled height="medium" position type="submit">
        Pesquisar
      </ButtonStyled>
    </FormStyled>
  );
};
