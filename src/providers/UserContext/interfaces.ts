export interface IContextUserProps {
  children: React.ReactNode;
}

export interface IProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IDataRegister {
  name: string;
  email: string;
  password: string;
}

export interface IDataLogin {
  email: string;
  password: string;
}

export interface IResponse {
  accessToken: string;
  user: UserResponse;
}

export interface UserResponse {
  email: string;
  name: string;
  id: number;
}

export interface IUserContext {
  products: IProducts[] | null;
  filteredWord: string | null;
  filteredProducts: IProducts[] | null;
  resetToAllProducts: () => void;
  setFilteredWord: React.Dispatch<React.SetStateAction<string | null>>;
  setFilteredProducts: React.Dispatch<React.SetStateAction<IProducts[] | null>>;
  loading: boolean;
  handleRegister: (data: IDataRegister) => Promise<void>;
  handleLogin: (data: IDataLogin) => Promise<void>;
  handleLogout: () => void;
}
