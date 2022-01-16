import React from "react";
import fetch from "isomorphic-fetch";
import { ApolloClient, ApolloProvider as Provider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL,
  fetch: fetch,
  cache: new InMemoryCache(),
});

export const ApolloProvider = ({ children }) => <Provider client={client}>{children}</Provider>;
