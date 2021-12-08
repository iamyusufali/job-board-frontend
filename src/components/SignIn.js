import React, { useState } from "react";
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

const SignIn = () => {
  const [formData, setFormData] = useState({ identifier: "", password: "" });

  const handleSubmit = async () => {
    try {
      const result = await axios.post(
        `${process.env.API_BASE_URL}/auth/local`,
        formData
      );

      console.log(result);
    } catch (error) {}
  };

  return (
    <Box mt={10}>
      <Heading colorScheme="blue800" mb={5} textAlign="center">
        Sign In
      </Heading>
      <Box w="20rem" mx="auto">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            onChange={evt =>
              setFormData(prevData => ({
                ...prevData,
                identifier: evt.target.value,
              }))
            }
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            onChange={evt =>
              setFormData(prevData => ({
                ...prevData,
                password: evt.target.value,
              }))
            }
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
    </Box>
  );
};

export default SignIn;
