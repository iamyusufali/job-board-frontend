import React from "react";
import { navigate } from "gatsby";
import {
  Button,
  RadioGroup,
  Radio,
  Box,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Stack,
  useColorModeValue,
  useToast,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Post } from "../utils/apiRequester";
import { useAuthContext } from "../context/AuthContext";
import { toastConfig } from "../constants";

const PostJob = () => {
  const { authData } = useAuthContext();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const toast = useToast();

  const submitHandler = async formData => {
    formData.user = authData.user;

    const { result } = await Post("jobs", formData);

    if (result) {
      navigate("/app/my-jobs");
      return toast({
        ...toastConfig,
        title: "Job has been added.",
        status: "success",
      });
    }
  };

  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Post New Job</Heading>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8} minW={"lg"}>
          <form onSubmit={handleSubmit(submitHandler)}>
            <FormControl id="job_title" mb={5} isInvalid={errors?.job_title}>
              <FormLabel>Job Title</FormLabel>
              <Input type="text" {...register("job_title", { required: true })} />
            </FormControl>

            <FormControl id="location" mb={5} isInvalid={errors?.location}>
              <FormLabel>Location</FormLabel>
              <Input type="text" {...register("location", { required: true })} />
            </FormControl>

            <FormControl id="job_type" mb={5} isInvalid={errors?.job_type}>
              <FormLabel>Job Type</FormLabel>
              <RadioGroup onChange={value => setValue("job_type", value)}>
                <Stack direction="row">
                  <Radio value="Full Time">Full Time</Radio>
                  <Radio value="Part Time">Part Time</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl id="contact_email" mb={5} isInvalid={errors?.contact_email}>
              <FormLabel>Contact Email</FormLabel>
              <Input type="email" {...register("contact_email", { required: true })} />
            </FormControl>

            <FormControl id="description" mb={5} isInvalid={errors?.description}>
              <FormLabel>Description</FormLabel>
              <Textarea {...register("description", { required: true })} />
            </FormControl>

            <Button w="100%" bg="green.500" color="white" _hover={{ bg: "green.600" }} type="submit">
              Post
            </Button>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default PostJob;
