import React from "react";
import { Link } from "gatsby";
import { Flex, Center } from "@chakra-ui/react";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
