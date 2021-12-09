import React from "react";
import axios from "axios";
import { navigate } from "gatsby";
import { Box, FormControl, FormLabel, Input, Heading, Textarea, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const PostJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async formData => {
    try {
      await axios.post(`${process.env.API_BASE_URL}/jobs`, formData);
      navigate("/app/my-jobs");
    } catch (error) {}
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

          <FormControl id="full_time" mb={5} isInvalid={errors?.full_time}>
            <FormLabel>Full Time</FormLabel>
            <Input type="text" {...register("full_time", { required: true })} />
          </FormControl>

          <FormControl id="email" mb={5} isInvalid={errors?.email}>
            <FormLabel>Contact Email</FormLabel>
            <Input type="email" {...register("email", { required: true })} />
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
