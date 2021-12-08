import React from "react";
import axios from "axios";
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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = async formData => {
    console.log(formData);
  };

  return (
    <Box mt={10}>
      <Heading mb={5} textAlign="center">
        Sign Up
      </Heading>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Box w="20rem" mx="auto">
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input {...register("email", { required: true })} type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              {...register("password", { required: true })}
              type="password"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password Confirm</FormLabel>
            <Input
              {...register("password_confirm", { required: true })}
              type="password"
            />
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
