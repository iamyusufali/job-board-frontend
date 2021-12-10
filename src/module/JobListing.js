import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";
import { GetPublic } from "../utils/apiRequester";

const JobListing = () => {
  const [jobList, setJobList] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);

  const getJobs = async (start = 0, limit = 2) => {
    const { result } = await GetPublic(`jobs?_sort=created_at&_start=${start}&_limit=${limit}`);
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
      ) : null}
    </Box>
  );
};

export default JobListing;
