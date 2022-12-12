import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { toastStyle } from "../../styles/toast";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [currentSale, setCurrentSale] = useState([]);

  const totalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(currentSale.reduce((x, y) => x + y.price, 0));

  const handleAddToCart = (product) => {
    const testProduct = currentSale.find((e) => e.id === product.id);

    if (!testProduct) {
      setCurrentSale(currentSale.concat([product]));
      toast.success("Item adicionado ao carrinho com sucesso", toastStyle);
    } else {
      toast.error("Item já está no carrinho", toastStyle);
    }
  };

  const handleRemoveFromCart = (id) => {
    const newCurrentSale = currentSale.filter((e) => e.id !== id);
    setCurrentSale(newCurrentSale);
    toast.warn("Item removido do carrinho com sucesso", toastStyle);
  };

  const clearCard = () => {
    setCurrentSale([]);
  };

  return (
    <CartContext.Provider
      value={{
        currentSale,
        totalPrice,
        handleAddToCart,
        handleRemoveFromCart,
        clearCard,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
