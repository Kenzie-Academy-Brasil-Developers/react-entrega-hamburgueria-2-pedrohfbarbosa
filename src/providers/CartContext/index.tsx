import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { IProducts } from "../UserContext/interfaces";
import { ICartContext, ICartProducts, IContextCartProps } from "./interfaces";

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: IContextCartProps) => {
  const [currentSale, setCurrentSale] = useState<ICartProducts[]>([]);
  const [modalCart, setModalCart] = useState(false);

  const handleModalCart = () => {
    setModalCart(!modalCart);
  };

  const totalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(currentSale.reduce((x, y) => x + y.quantity * y.price, 0));

  const totalItems = currentSale.reduce((x, y) => x + y.quantity, 0);

  const handleAddOneItem = (id: number) => {
    const index = currentSale.findIndex((e) => e.id === id);

    let newCurrentSale = [...currentSale];

    newCurrentSale[index].quantity += 1;

    setCurrentSale(newCurrentSale);
  };

  const handleRemoveOneItem = (id: number) => {
    const index = currentSale.findIndex((e) => e.id === id);

    let newCurrentSale = [...currentSale];

    if (newCurrentSale[index].quantity > 1) {
      newCurrentSale[index].quantity -= 1;

      setCurrentSale(newCurrentSale);
    } else {
      handleRemoveFromCart(id);
    }
  };

  const handleAddToCart = (product: IProducts) => {
    const testProduct = currentSale.find((e) => e.id === product.id);

    if (!testProduct) {
      setCurrentSale(currentSale.concat([{ ...product, quantity: 1 }]));

      toast.success("Item adicionado ao carrinho com sucesso");
    } else {
      handleAddOneItem(product.id);
    }
  };

  const handleRemoveFromCart = (id: number) => {
    const newCurrentSale = currentSale.filter((e) => e.id !== id);

    setCurrentSale(newCurrentSale);

    toast.warn("Item removido do carrinho com sucesso");
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
        handleAddOneItem,
        modalCart,
        handleModalCart,
        setModalCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
