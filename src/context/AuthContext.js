import { createContext, useContext } from "react";

const AuthContext = createContext(null);

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error(
      "useAuthContext must be used within a AuthContextProvider component"
    );
  }

  return context;
};

export { AuthContext, useAuthContext };
