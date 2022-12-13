import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { toastStyle } from "../../styles/toast";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [currentSale, setCurrentSale] = useState([]);

  const totalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(currentSale.reduce((x, y) => x + y.quantity * y.price, 0));

  const handleAddOneItem = (id) => {
    const index = currentSale.findIndex((e) => e.id === id);
    let newCurrentSale = [...currentSale];
    newCurrentSale[index].quantity += 1;
    setCurrentSale(newCurrentSale);
  };

  const handleRemoveOneItem = (id) => {
    const index = currentSale.findIndex((e) => e.id === id);
    let newCurrentSale = [...currentSale];
    if (newCurrentSale[index].quantity > 1) {
      newCurrentSale[index].quantity -= 1;
      setCurrentSale(newCurrentSale);
    } else {
      handleRemoveFromCart(id);
    }
  };

  const handleAddToCart = (product) => {
    const testProduct = currentSale.find((e) => e.id === product.id);

    if (!testProduct) {
      setCurrentSale(currentSale.concat([{ ...product, quantity: 1 }]));
      toast.success("Item adicionado ao carrinho com sucesso", toastStyle);
    } else {
      handleAddOneItem(product.id);
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
        handleRemoveOneItem,
        handleAddOneItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
