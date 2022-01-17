import React from "react";
import { ApolloClient, ApolloProvider as Provider, InMemoryCache, createHttpLink } from "@apollo/client";

const link = createHttpLink({
  uri: process.env.GRAPHQL_URL,
  credentials: "include",
});

const client = new ApolloClient({ cache: new InMemoryCache(), link });

export const ApolloProvider = ({ children }) => <Provider client={client}>{children}</Provider>;
