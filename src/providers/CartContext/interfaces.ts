import { IProducts } from "../UserContext/interfaces";

export interface IContextCartProps {
  children: React.ReactNode;
}

export interface ICartProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  quantity: number;
}

export interface ICartContext {
  currentSale: ICartProducts[];
  totalPrice: string;
  handleAddToCart: (product: IProducts) => void;
  handleRemoveFromCart: (id: number) => void;
  clearCard: () => void;
  handleRemoveOneItem: (id: number) => void;
  handleAddOneItem: (id: number) => void;
  modalCart: boolean;
  handleModalCart: () => void;
  setModalCart: React.Dispatch<React.SetStateAction<boolean>>;
  totalItems: number;
}
