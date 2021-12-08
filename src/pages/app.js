import React from "react";
import { Router } from "@reach/router";

import Layout from "../components/Layout";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import JobListing from "../module/JobListing";
import PrivateRoute from "../components/PrivateRoute";

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <SignIn path="/sign-in" />
        <SignUp path="/sign-up" />
        <PrivateRoute path="/job-listing" component={JobListing} />
      </Router>
    </Layout>
  );
};

export default App;
