import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStyled } from "./InputSearchStyled";
import { ButtonStyled } from "../../../styles/ButtonStyled";
import { InputStyled } from "../../../styles/InputStyled";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { schema } from "./schema";

export const InputSearch = () => {
  const { products, setFilteredWord, setFilteredProducts } =
    useContext(UserContext);

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { search: "" },
  });

  const handleSearch = (data) => {
    setFilteredWord(data.search);
    const newFilter = products.filter(
      (e) =>
        e.name.toLowerCase().includes(data.search.toLowerCase()) ||
        e.category.toLowerCase().includes(data.search.toLowerCase())
    );
    setFilteredProducts(newFilter);
    reset({ search: "" });
  };

  return (
    <FormStyled onSubmit={handleSubmit(handleSearch)}>
      <InputStyled
        name="inputSearch"
        placeholder="Digitar pesquisa"
        register={register("search")}
      />

      <ButtonStyled height="medium" position type="submit">
        Pesquisar
      </ButtonStyled>
    </FormStyled>
  );
};
