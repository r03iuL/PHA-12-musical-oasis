import { useContext } from "react";
import { Authcontext } from "../Providers/Authcontexts";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user,loading } = useContext(Authcontext);
  const location = useLocation();
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/LogIn" state={{ from: location }} replace></Navigate>;  
};

export default PrivateRoutes;
