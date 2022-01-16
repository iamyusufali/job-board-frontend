import React from "react";
import { Router } from "@reach/router";
import { Flex, Spinner, Text } from "@chakra-ui/react";

import PrivateRoute from "../components/PrivateRoute";
import Redirect from "../components/Redirect";
import JobListing from "../module/JobListing";
import MyListing from "../module/MyListing";
import PostJob from "../module/PostJob";
import { useAuthContext } from "../context/AuthContext";

const App = () => {
  const { fetchingUser } = useAuthContext();

  return (
    <>
      {fetchingUser ? (
        <Flex rounded={"lg"} boxShadow={"lg"} p={8} w="300px" mx="auto" mt={20}>
          <Spinner />
          <Text ml={4}>Loading please wait...</Text>
        </Flex>
      ) : (
        <Router basepath="/app">
          <Redirect path="/" />
          <JobListing path="/job-listing" />
          <PrivateRoute path="/my-jobs" component={MyListing} />
          <PrivateRoute path="/post-job" component={PostJob} />
        </Router>
      )}
    </>
  );
};

export default App;
