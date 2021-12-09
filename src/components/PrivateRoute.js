import React from "react";
import { navigate } from "gatsby";
import { useAuthContext } from "../context/AuthContext";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn && location.pathname !== `/app/login`) {
    navigate("/app/sign-in");
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
