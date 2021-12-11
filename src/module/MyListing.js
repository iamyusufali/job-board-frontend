import React, { useEffect, useState } from "react";
import { Flex, Box, Heading, useToast } from "@chakra-ui/react";

import JobCard from "../components/JobCard";
import { DELETE, Get } from "../utils/apiRequester";
import { toastConfig } from "../constants";

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
      const { result } = await Get("jobs/my");

      result && setJobList(result);
    })();
  }, []);

  return (
    <Box mt={10}>
      <Heading mb={5} textAlign="center">
        My Jobs
      </Heading>
      <Flex flexDirection="column" alignItems="center" py={10}>
        {jobList.map((job, index) => (
          <JobCard showDelete={true} job={job} key={index} handleDelete={deleteJobHandler} />
        ))}
      </Flex>
    </Box>
  );
};

export default MyListing;
