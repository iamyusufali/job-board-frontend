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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../context/AuthContext";
import { PostPublic, RequestBase } from "../utils/apiRequester";
import { toastConfig } from "../constants";

/***
 *
 * Sign In Form Component
 *
 ***/
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { authData, setAuthData } = useAuthContext();
  const toast = useToast();

  const submitHandler = async formData => {
    const { result, error } = await PostPublic("auth/local", formData);

    if (error) {
      return toast({
        ...toastConfig,
        title: "Invalid email or password",
        status: "error",
      });
    }

    document.cookie = `auth-token=${result.jwt}`;
    RequestBase.changeToken(result.jwt);
    setAuthData({ isLoggedIn: true, user: result.user });
    navigate("/app/my-jobs");
  };

  useEffect(() => {
    authData.isLoggedIn && navigate("/app/my-jobs");
  }, []);

  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Stack spacing={4}>
              <FormControl id="email" isInvalid={errors?.identifier}>
                <FormLabel>Email address</FormLabel>
                <Input {...register("identifier", { required: true })} type="email" />
              </FormControl>
              <FormControl id="password" isInvalid={errors?.password}>
                <FormLabel>Password</FormLabel>
                <Input {...register("password", { required: true })} type="password" />
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
            Don't have an account ?
          </Text>
          <Text fontSize={"lg"} color={"blue.600"}>
            <Link to="/app/sign-up">Sign Up</Link>
          </Text>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default SignIn;
