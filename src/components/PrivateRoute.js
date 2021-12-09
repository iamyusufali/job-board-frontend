import React from "react";
import { navigate } from "gatsby";
import { useAuthContext } from "../context/AuthContext";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { authData } = useAuthContext();

  if (!authData.isLoggedIn && location.pathname !== `/app/login`) {
    navigate("/app/sign-in");
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
