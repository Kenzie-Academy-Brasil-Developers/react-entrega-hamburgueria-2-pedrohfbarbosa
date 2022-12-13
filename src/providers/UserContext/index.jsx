import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { instance } from "../../services/api/api";
import { toastStyle } from "../../styles/toast";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [filteredWord, setFilteredWord] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getProducts = async () => {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await instance.get("/products", {
        headers: { authorization: `Bearer ${token}` },
      });

      setProducts(response.data);
    } catch (error) {
      toast.error(error.response.data, toastStyle);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleRegister = async (data) => {
    try {
      await instance.post("/users", data);

      toast.success("Cadastro efetuado com sucesso", toastStyle);

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data, toastStyle);
    }
  };

  const handleLogin = async (data) => {
    try {
      const response = await instance.post("/login", data);

      localStorage.setItem("@TOKEN", response.data.accessToken);

      await getProducts();

      navigate("/home");

      toast.success("Login efetuado com sucesso", toastStyle);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data, toastStyle);
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
