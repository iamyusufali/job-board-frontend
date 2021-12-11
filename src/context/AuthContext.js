import React, { createContext, useContext, useState, useEffect } from "react";
import { RequestBase, Get } from "../utils/apiRequester";

const AuthContext = createContext(null);

/**
 *
 * Authentication Context Provider
 *
 ***/
const AuthProvider = ({ children }) => {
  const [fetchingUser, setFetchingUser] = useState(true);
  const [authData, setAuthData] = useState({
    isLoggedIn: false,
    user: null,
  });

  useEffect(() => {
    // Set token for base requester class
    const token = document.cookie.match(`(^|;)\\s*auth-token\\s*=\\s*([^;]+)`)?.pop() || "";
    RequestBase.changeToken(token);

    // Check if user is logged in or not based on jwt token
    (async function () {
      const { result, error } = await Get("users/me");
      result && setAuthData({ isLoggedIn: true, user: result });
      error && setAuthData({ isLoggedIn: false, user: null });

      setFetchingUser(false);
    })();
  }, []);

  return <AuthContext.Provider value={{ authData, setAuthData, fetchingUser }}>{children}</AuthContext.Provider>;
};

// Authentication Context provider hook
const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuthContext must be used within a AuthContextProvider component");
  }

  return context;
};

export { AuthContext, useAuthContext, AuthProvider };
