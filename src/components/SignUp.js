import React from "react";
import { Link } from "gatsby";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";

const SignUp = () => {
  return (
    <Box mt={10}>
      <Heading mb={5} textAlign="center">
        Sign Up
      </Heading>
      <Box w="20rem" mx="auto">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password Confirm</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button mt={4} w="100%" colorScheme="teal" type="submit">
          Sign Up
        </Button>
        <Flex flexDirection="column" alignItems="center" mt={5}>
          <Text mb={2}>Already have an account ?</Text>
          <Text color="blue">
            <Link to="/app/sign-in">Sign In</Link>
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default SignUp;
