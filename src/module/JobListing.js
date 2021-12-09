import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
import { Flex } from "@chakra-ui/react";

const JobListing = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`${process.env.API_BASE_URL}/jobs`);
      setJobList(data);
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
