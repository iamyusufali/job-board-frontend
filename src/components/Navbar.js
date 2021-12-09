import React from "react";
import { Link } from "gatsby";
import { Flex, Center, Text } from "@chakra-ui/react";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { authData, setAuthData } = useAuthContext();

  const handleLogout = () => {
    setAuthData({ isLoggedIn: false, info: null });
    document.cookie = `auth-token=;path=/app;domain=;expires=Mon, 19 March 1998 00:00:00 GMT;`;
  };

  return (
    <Flex justifyContent="space-between" bg="teal" height="60px" p="4">
      <Center cursor="pointer" color="white">
        <Link to="/">Job Board</Link>
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
          <Flex>
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
