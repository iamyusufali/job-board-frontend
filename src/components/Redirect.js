import React from "react";
import { navigate } from "gatsby";
import { useAuthContext } from "../context/AuthContext";

const Redirect = () => {
  const { authData } = useAuthContext();

  if (!authData.isLoggedIn) {
    navigate("/sign-in");
  } else {
    navigate("/app/my-jobs");
  }

  return <></>;
};

export default Redirect;
