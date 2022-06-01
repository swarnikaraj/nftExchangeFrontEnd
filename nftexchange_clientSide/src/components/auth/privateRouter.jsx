import { metaAccountContext } from "../../contexts/metaAccountcontext";
import { useContext } from "react";
import { Navigate } from "react-router";

export const PrivateRoute = ({ children }) => {
  const { metaAddress, addMetaAddress } = useContext(metaAccountContext);

  return !(metaAddress.length > 0) ? <Navigate to={"/login"} /> : children;
};
