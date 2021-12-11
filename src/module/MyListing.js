import React, { useEffect, useState } from "react";
import { Flex, Box, Heading, useToast, Text, Stack, Button } from "@chakra-ui/react";
import { Link } from "gatsby";

import JobCard from "../components/JobCard";
import { DELETE, Get } from "../utils/apiRequester";
import { toastConfig } from "../constants";

/***
 *
 * My Job Listing
 *
 ***/
const MyListing = () => {
  const [jobList, setJobList] = useState([]);
  const toast = useToast();

  const deleteJobHandler = async jobId => {
    const { result } = await DELETE(`jobs/${jobId}`);

    if (result) {
      setJobList(prevList => prevList.filter(job => job.id !== jobId));
      return toast({
        ...toastConfig,
        title: "Job has been deleted.",
        status: "success",
      });
    }
  };

  useEffect(() => {
    (async function () {
      const { result } = await Get("jobs/my?_sort=created_at:DESC");

      result && setJobList(result);
    })();
  }, []);

  return (
    <Box mt={10}>
      <Heading mb={5} textAlign="center">
        My Jobs
      </Heading>
      <Flex flexDirection="column" alignItems="center" py={10}>
        {jobList.length > 0 ? (
          jobList.map((job, index) => (
            <JobCard showDelete={true} job={job} key={index} handleDelete={deleteJobHandler} />
          ))
        ) : (
          <Stack spacing={5} rounded={"lg"} boxShadow={"lg"} p={8} minW="md">
            <Text textAlign="center" fontSize="lg" as="span" color="gray.500">
              You have not added any jobs yet.
            </Text>
            <Link to="/app/post-job">
              <Button colorScheme="green" bg="green.300" w="100%">
                Post Job
              </Button>
            </Link>
          </Stack>
        )}
      </Flex>
    </Box>
  );
};

export default MyListing;
