import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { ApolloProvider } from "./graphql/apollo-client";

export const wrapRootElement = ({ element }) => (
  <ApolloProvider>
    <AuthProvider>{element}</AuthProvider>
  </ApolloProvider>
);
