import React, { useEffect, useState } from "react";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";
import { GetPublic } from "../utils/apiRequester";
import { useQuery } from "@apollo/client";
import { GET_ALL_JOBS } from "../graphql/queries";

/***
 *
 * Job Listing
 *
 ***/
const JobListing = () => {
  const [totalJobs, setTotalJobs] = useState(0);
  const { loading, error, data, refetch } = useQuery(GET_ALL_JOBS, { variables: { start: 0, limit: 2 } });

  useEffect(() => {
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
      {loading && <div>Loading Jobs...</div>}
      {!loading && !error && data.jobs.length > 0 ? (
        <Pagination
          data={data.jobs}
          dataCount={totalJobs}
          render={(data, key) => <JobCard job={data} key={key} />}
          pageLimit={5}
          dataLimit={2}
          fetchData={(start, limit) => refetch({ start, limit })}
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
