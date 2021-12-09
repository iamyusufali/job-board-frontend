import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { Router } from "@reach/router";

import Layout from "../components/Layout";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import JobListing from "../module/JobListing";
import PrivateRoute from "../components/PrivateRoute";
import { useAuthContext } from "../context/AuthContext";

const App = () => {
  const { setIsLoggedIn } = useAuthContext();

  useEffect(() => {
    const token =
      document.cookie.match(`(^|;)\\s*auth-token\\s*=\\s*([^;]+)`)?.pop() || "";

    if (token) {
      setIsLoggedIn(true);
      navigate("/app/job-listing");
    }

    // !token && navigate("/app/sign-in");
  }, []);

  return (
    <Layout>
      <Router basepath="/app">
        <SignIn path="/sign-in" />
        <SignUp path="/sign-up" />
        <JobListing path="/job-listing" />
      </Router>
    </Layout>
  );
};

export default App;
