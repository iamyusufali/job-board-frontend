import React from "react";
import { navigate } from "gatsby";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Textarea,
  Button,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Post } from "../utils/apiRequester";

const PostJob = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const submitHandler = async formData => {
    const { result } = await Post("jobs", formData);
    result && navigate("/app/my-jobs");
  };

  return (
    <Box mt={10}>
      <Heading mb={5} textAlign="center">
        Post New Job
      </Heading>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Box w="40%" mx="auto">
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

          <Button w="100%" bg="green.300" _hover={{ bg: "green.400" }} type="submit">
            Post
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default PostJob;
