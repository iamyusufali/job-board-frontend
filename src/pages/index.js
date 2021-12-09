import React from "react";
import { Link } from "gatsby";
import { Flex, Heading, Button } from "@chakra-ui/react";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Flex flexDirection="column" alignItems="center" mx="auto" mt={20}>
        <Heading mb={2}>Welcome to Job Board application.</Heading>
        <Link to="/app/job-listing">
          <Button colorScheme="blue">View Job Listing</Button>
        </Link>
        <Flex mt={5}>
          <Link to="/app/sign-up">
            <Button colorScheme="blue" mr={2}>
              Sign In
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Layout>
  );
}
