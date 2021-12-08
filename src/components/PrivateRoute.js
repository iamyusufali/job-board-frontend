import React from "react";
import { navigate } from "gatsby";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!false && location.pathname !== `/app/login`) {
    navigate("/app/sign-in");
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
