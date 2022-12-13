import { useEffect } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { instance } from "../../services/api/api";
import { toastStyle } from "../../styles/toast";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredWord, setFilteredWord] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);

  const getProducts = async () => {
    try {
      const response = await instance.get("/products");
      setProducts(response.data);
    } catch (error) {
      toast.error("Erro de conexão", toastStyle);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
        setFilteredProducts
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
