import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStyledSearch } from "./InputSearchStyled";
import { ButtonStyled } from "../../../styles/ButtonStyled";
import { InputStyled } from "../../../styles/InputStyled";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { schema } from "./schema";
import { Navigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

interface IFormValues {
  search: string;
}

export const InputSearch = () => {
  const { products, setFilteredWord, setFilteredProducts } =
    useContext(UserContext);

  const { register, handleSubmit, reset } = useForm<IFormValues>({
    resolver: yupResolver(schema),
    defaultValues: { search: "" },
  });

  if (!products) {
    return <Navigate to="/" />;
  }

  const handleSearch: SubmitHandler<IFormValues> = (data) => {
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
    <FormStyledSearch onSubmit={handleSubmit(handleSearch)}>
      <InputStyled
        name="inputSearch"
        placeholder="Digitar pesquisa"
        register={register("search")}
      />

      <ButtonStyled height="medium" position type="submit">
        <BsSearch />
      </ButtonStyled>
    </FormStyledSearch>
  );
};
