import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error(
      "useAuthContext must be used within a AuthContextProvider component"
    );
  }

  return context;
};

export { AuthContext, useAuthContext, AuthProvider };
