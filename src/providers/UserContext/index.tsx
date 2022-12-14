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
      toast.error("Acesso não autorizado ou falha na conexão", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleRegister = async (data: IDataRegister): Promise<void> => {
    try {
      const { data: responseData } = await instance.post<IResponse>(
        "/users",
        data
      );

      toast.success("Cadastro efetuado com sucesso", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      navigate("/");
    } catch (err) {
      toast.error("E-mail já existente ou falha na conexão", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleLogin = async (data: IDataLogin): Promise<void> => {
    try {
      const { data: responseData } = await instance.post<IResponse>(
        "/login",
        data
      );

      localStorage.setItem("@TOKEN", responseData.accessToken);

      await getProducts();

      navigate("/home");

      toast.success("Login efetuado com sucesso", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (err) {
      toast.error("E-mail ou senha incorretos ou falha na conexão", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
