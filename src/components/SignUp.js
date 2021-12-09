import React from "react";
import axios from "axios";
import { Link, navigate } from "gatsby";
import { Box, FormControl, FormLabel, Input, Button, Heading, Text, Flex, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const toast = useToast();

  const submitHandler = async formData => {
    try {
      await axios.post(`${process.env.API_BASE_URL}/auth/local/register`, formData);

      navigate("/app/sign-in");
      toast({
        title: "Account created.",
        description: "We've created an account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error) {}
  };

  return (
    <Box mt={10}>
      <Heading mb={5} textAlign="center">
        Sign Up
      </Heading>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Box w="20rem" mx="auto">
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input {...register("username", { required: true })} type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input {...register("email", { required: true })} type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input {...register("password", { required: true })} type="password" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password Confirm</FormLabel>
            <Input {...register("password_confirm", { required: true })} type="password" />
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
      </form>
    </Box>
  );
};

export default SignUp;
