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

      console.log(response);

      setProducts(response.data);
    } catch (error) {
      toast.error("Erro de conexão", toastStyle);
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
      const response = await instance.post("/users", data);

      console.log(response);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (data) => {
    try {
      const response = await instance.post("/login", data);

      console.log(response);

      localStorage.setItem("@TOKEN", response.data.accessToken);

      getProducts();
      
      navigate("/home");

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const resetToAllProducts = () => {
    setFilteredWord(null);
    setFilteredProducts(null);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
