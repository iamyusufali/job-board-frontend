import React from "react";
import { Link } from "gatsby";
import { Box, Heading } from "@chakra-ui/react";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Box>
        <Heading>Welcome to Job Board application.</Heading>
        <Link to="/app/sign-up">Sign In</Link>
        <Link to="/app/sign-up">Sign Up</Link>
        <Link to="/app/job-listing">View All Jobs</Link>
      </Box>
    </Layout>
  );
}
