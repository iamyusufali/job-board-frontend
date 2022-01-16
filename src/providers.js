import React from "react";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";
import { ApolloProvider } from "./graphql/apollo-client";

export const wrapRootElement = ({ element }) => (
  <ApolloProvider>
    <AuthProvider>{element}</AuthProvider>
  </ApolloProvider>
);

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
