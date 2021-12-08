import React from "react";
import { Link } from "gatsby";
import axios from "axios";
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

const SignIn = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = async formData => {
    try {
      const result = await axios.post(
        `${process.env.API_BASE_URL}/auth/local`,
        formData
      );

      document.cookie = `auth-token=${result.data.jwt}`;
    } catch (error) {}
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
            <Input
              {...register("identifier", { required: true })}
              type="email"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              {...register("password", { required: true })}
              type="password"
            />
          </FormControl>
          <Button
            mt={4}
            w="100%"
            colorScheme="teal"
            type="submit"
            onClick={handleSubmit}
          >
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
