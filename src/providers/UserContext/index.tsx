import { AxiosError } from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { instance } from "../../services/api/api";
import {
  IContextUserProps,
  IDataLogin,
  IDataRegister,
  IProducts,
  IResponse,
  IUserContext,
} from "./interfaces";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IContextUserProps) => {
  const [products, setProducts] = useState<IProducts[] | null>(null);
  const [filteredWord, setFilteredWord] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<IProducts[] | null>(
    null
  );

  const [loading, setLoading] = useState(true);
  const [loadingForm, setLoadingForm] = useState(false);

  const navigate = useNavigate();

  const getProducts = async () => {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const { data } = await instance.get<IProducts[]>("/products", {
        headers: { authorization: `Bearer ${token}` },
      });

      setProducts(data);
    } catch (err) {
      const currentError = err as AxiosError;

      const message =
        (currentError.response?.data as string) || "Algo deu errado!";

      toast.error(message);

      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleRegister = async (data: IDataRegister): Promise<void> => {
    setLoadingForm(true);
    try {
      await instance.post("/users", data);

      toast.success("Cadastro efetuado com sucesso");

      navigate("/");
    } catch (err) {
      const currentError = err as AxiosError;

      const message =
        (currentError.response?.data as string) || "Algo deu errado!";

      toast.error(message);
    } finally {
      setLoadingForm(false);
    }
  };

  const handleLogin = async (data: IDataLogin): Promise<void> => {
    setLoadingForm(true);
    try {
      const { data: responseData } = await instance.post<IResponse>(
        "/login",
        data
      );

      localStorage.setItem("@TOKEN", responseData.accessToken);

      await getProducts();

      navigate("/home");

      toast.success("Login efetuado com sucesso");
    } catch (err) {
      const currentError = err as AxiosError;

      const message =
        (currentError.response?.data as string) || "Algo deu errado!";

      toast.error(message);
    } finally {
      setLoadingForm(false);
    }
  };

  const resetToAllProducts = () => {
    setFilteredWord(null);

    setFilteredProducts(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("@TOKEN");

    setProducts(null);

    setFilteredProducts(null);

    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        products,
        filteredWord,
        filteredProducts,
        resetToAllProducts,
        setFilteredWord,
        setFilteredProducts,
        loading,
        handleRegister,
        handleLogin,
        handleLogout,
        loadingForm,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
