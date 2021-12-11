import React, { useEffect, useState } from "react";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";
import { GetPublic } from "../utils/apiRequester";

/***
 *
 * Job Listing
 *
 ***/
const JobListing = () => {
  const [jobList, setJobList] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);

  const getJobs = async (start = 0, limit = 2) => {
    const { result } = await GetPublic(`jobs?_sort=created_at:DESC&_start=${start}&_limit=${limit}`);
    result && setJobList(result);
  };

  useEffect(() => {
    getJobs();

    (async function () {
      const { result } = await GetPublic("jobs/count");
      result && setTotalJobs(result);
    })();
  }, []);

  return (
    <Box mt={10}>
      <Heading mb={5} textAlign="center">
        All Jobs
      </Heading>
      {jobList.length > 0 ? (
        <Pagination
          data={jobList}
          dataCount={totalJobs}
          render={(data, key) => <JobCard job={data} key={key} />}
          pageLimit={5}
          dataLimit={2}
          fetchData={getJobs}
        />
      ) : (
        <Stack spacing={5} rounded={"lg"} boxShadow={"lg"} p={8} w="300px" mx="auto" mt={5}>
          <Text textAlign="center" fontSize="lg" as="span" color="gray.500">
            There are no jobs.
          </Text>
        </Stack>
      )}
    </Box>
  );
};

export default JobListing;
