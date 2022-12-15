import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const ProtectedRoutes = () => {
  const { products, loading } = useContext(UserContext);

  if (loading) {
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    );
  }
  return products ? <Outlet /> : <Navigate to="/" />;
};
