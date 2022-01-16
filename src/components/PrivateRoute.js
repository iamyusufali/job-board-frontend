import React from "react";
import { navigate } from "gatsby";
import { useAuthContext } from "../context/AuthContext";

/***
 *
 * Private Route Component
 *
 ***/
const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { authData } = useAuthContext();

  if (!authData.isLoggedIn && location.pathname !== `/sign-in`) {
    navigate("/sign-in");
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
