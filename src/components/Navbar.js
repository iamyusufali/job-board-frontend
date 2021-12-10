import React from "react";
import { Link } from "gatsby";
import { Flex, Center, Heading, Text } from "@chakra-ui/react";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { authData, setAuthData } = useAuthContext();

  const handleLogout = () => {
    setAuthData({ isLoggedIn: false, info: null });
    document.cookie = `auth-token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  };

  return (
    <Flex justifyContent="space-between" bg="teal" height="70px" p="4">
      <Center cursor="pointer" color="white">
        <Link to="/">
          <Heading fontSize="22px">Job Board</Heading>
        </Link>
      </Center>
      {authData.isLoggedIn && (
        <>
          <Flex justifyContent="end" cursor="pointer">
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
          <Flex alignItems="center">
            <Center color="white" cursor="pointer" onClick={handleLogout}>
              <Text>Logout</Text>
            </Center>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Navbar;
