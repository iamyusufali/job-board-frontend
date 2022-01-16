import React, { useEffect } from "react";
import { Link, navigate } from "gatsby";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  Flex,
  Stack,
  useColorModeValue,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import { Post } from "../utils/apiRequester";
import { toastConfig } from "../constants";
import { useAuthContext } from "../context/AuthContext";

/***
 *
 * Sign up Component
 *
 ***/
const SignUp = () => {
  const { authData } = useAuthContext();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onSubmit" });
  const toast = useToast();

  const submitHandler = async formData => {
    const { error } = await Post("auth/local/register", formData);

    if (error) {
      return toast({
        ...toastConfig,
        title: "Unable to create Account",
        status: "error",
      });
    }

    navigate("/sign-in");
    toast({
      ...toastConfig,
      title: "Account created.",
      description: "We've created an account for you.",
      status: "success",
    });
  };

  useEffect(() => {
    authData.isLoggedIn && navigate("/app/my-jobs");
  }, []);

  return (
    <Layout>
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign up</Heading>
          </Stack>
          <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8} minW="400px">
            <form onSubmit={handleSubmit(submitHandler)}>
              <Stack spacing={4}>
                <FormControl id="username" isInvalid={errors?.username}>
                  <FormLabel>Username</FormLabel>
                  <Input {...register("username", { required: true })} type="text" />
                </FormControl>
                <FormControl id="email" isInvalid={errors?.email}>
                  <FormLabel>Email address</FormLabel>
                  <Input {...register("email", { required: true })} type="email" />
                </FormControl>
                <FormControl id="password" isInvalid={errors?.password}>
                  <FormLabel>Password</FormLabel>
                  <Input {...register("password", { required: true })} type="password" />
                </FormControl>
                <FormControl id="password_confirm" isInvalid={errors?.password_confirm}>
                  <FormLabel>Password Confirm</FormLabel>
                  <Input
                    {...register("password_confirm", {
                      required: true,
                      validate: value => value === getValues("password"),
                    })}
                    type="password"
                  />
                  {getValues("password") !== getValues("password_confirm") ? (
                    <FormErrorMessage>Passwords don't match</FormErrorMessage>
                  ) : null}
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    type="submit"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    isLoading={isSubmitting}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
          <Flex flexDirection="column" alignItems="center" mt={5}>
            <Text fontSize={"lg"} mb={2}>
              Already have an account ?
            </Text>
            <Text fontSize={"lg"} color={"blue.600"}>
              <Link to="/sign-in">Sign In</Link>
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </Layout>
  );
};

export default SignUp;
