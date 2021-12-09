import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    isLoggedIn: false,
    info: null,
  });

  return <AuthContext.Provider value={{ authData, setAuthData }}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuthContext must be used within a AuthContextProvider component");
  }

  return context;
};

export { AuthContext, useAuthContext, AuthProvider };
