import React from "react";
import { Link, navigate } from "gatsby";
import { Box, FormControl, FormLabel, Input, Button, Heading, Text, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../context/AuthContext";
import { PostPublic, RequestBase } from "../utils/apiRequester";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const { setAuthData } = useAuthContext();

  const submitHandler = async formData => {
    const { result, error } = await PostPublic("auth/local", formData);

    if (result) {
      document.cookie = `auth-token=${result.jwt}`;
      RequestBase.changeToken(result.jwt);
      setAuthData({ isLoggedIn: true, user: result.user });
      navigate("/app/my-jobs");
    }

    error && console.error("Some error in login.");
  };

  return (
    <Box mt={10}>
      <Heading colorScheme="blue800" mb={5} textAlign="center">
        Sign In
      </Heading>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Box w="20rem" mx="auto">
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input {...register("identifier", { required: true })} type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input {...register("password", { required: true })} type="password" />
          </FormControl>
          <Button mt={4} w="100%" colorScheme="teal" type="submit" onClick={handleSubmit}>
            Sign In
          </Button>
          <Flex flexDirection="column" alignItems="center" mt={5}>
            <Text mb={2}>Don't have an account ?</Text>
            <Text color="blue">
              <Link to="/app/sign-up">Sign Up</Link>
            </Text>
          </Flex>
        </Box>
      </form>
    </Box>
  );
};

export default SignIn;
