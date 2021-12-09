import React, { useEffect } from "react";
import { Router } from "@reach/router";
import { navigate } from "gatsby";

import Layout from "../components/Layout";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import PrivateRoute from "../components/PrivateRoute";
import JobListing from "../module/JobListing";
import MyListing from "../module/MyListing";
import PostJob from "../module/PostJob";
import { useAuthContext } from "../context/AuthContext";

const App = () => {
  const { authData } = useAuthContext();

  useEffect(() => {
    authData.isLoggedIn && navigate("/app/my-jobs");
  }, [authData.isLoggedIn]);

  return (
    <Layout>
      <Router basepath="/app">
        <SignIn path="/sign-in" />
        <SignUp path="/sign-up" />
        <JobListing path="/job-listing" />
        <PrivateRoute path="/my-jobs" component={MyListing} />
        <PrivateRoute path="/post-job" component={PostJob} />
      </Router>
    </Layout>
  );
};

export default App;
