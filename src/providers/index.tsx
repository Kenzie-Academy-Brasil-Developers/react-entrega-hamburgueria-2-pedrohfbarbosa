import { CartProvider } from "./CartContext";
import { UserProvider } from "./UserContext";

interface IContextProviders{
  children: React.ReactNode;
}

export const Providers = ({ children }: IContextProviders) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};
