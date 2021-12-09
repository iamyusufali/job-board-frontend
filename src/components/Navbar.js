import React from "react";
import { Link } from "gatsby";
import { Flex, Center, Box, Heading } from "@chakra-ui/react";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  // const { isLoggedIn } = useAuthContext();

  return (
    <Box>
      <Heading mb={5} textAlign="center">
        Job Board
      </Heading>
      <Flex justifyContent="end" bg="teal" p="4" height="60px">
        <Center marginRight="5" color="white">
          <Link to="/app/post-job">Post Job</Link>
        </Center>
        <Center marginRight="5" color="white">
          <Link to="/app/my-jobs">My Jobs</Link>
        </Center>
        <Center color="white">
          <Link to="/app/job-listing">All Jobs</Link>
        </Center>
      </Flex>
    </Box>
  );
};

export default Navbar;
