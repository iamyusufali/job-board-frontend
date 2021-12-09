import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import { Flex } from "@chakra-ui/react";
import { Get } from "../utils/apiRequester";

const JobListing = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    (async function () {
      const { result } = await Get("jobs");
      result && setJobList(result);
    })();
  }, []);

  return (
    <Flex flexDirection="column" alignItems="center" py={10}>
      {jobList.map((job, index) => (
        <JobCard job={job} key={index} />
      ))}
    </Flex>
  );
};

export default JobListing;
