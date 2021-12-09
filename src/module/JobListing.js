import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import { Flex, Box, Heading } from "@chakra-ui/react";
import { GetPublic } from "../utils/apiRequester";

const JobListing = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    (async function () {
      const { result } = await GetPublic("jobs");
      result && setJobList(result);
    })();
  }, []);

  return (
    <Box mt={10}>
      <Heading mb={5} textAlign="center">
        All Jobs
      </Heading>
      <Flex flexDirection="column" alignItems="center" py={10}>
        {jobList.map((job, index) => (
          <JobCard job={job} key={index} />
        ))}
      </Flex>
    </Box>
  );
};

export default JobListing;
