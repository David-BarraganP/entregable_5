import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const trainerName = useSelector((store) => store.trainerName.name);

  if (trainerName !== "") {
    // ? le permitimos ver l componente correspondiente
    return <Outlet />;
  } else {
    // ?lo vamos a redireccionar en el home
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
