import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";

import JobCard from "../components/JobCard";
import { DELETE, GetPublic } from "../utils/apiRequester";

const MyListing = () => {
  const [jobList, setJobList] = useState([]);

  const deleteJobHandler = async jobId => {
    const { result } = await DELETE(`jobs/${jobId}`);
    result && setJobList(prevList => prevList.filter(job => job.id !== jobId));
  };

  useEffect(() => {
    (async function () {
      const { result } = await GetPublic("jobs");
      result && setJobList(result);
    })();
  }, []);

  return (
    <Flex flexDirection="column" alignItems="center" py={10}>
      {jobList.map((job, index) => (
        <JobCard showDelete={true} job={job} key={index} handleDelete={deleteJobHandler} />
      ))}
    </Flex>
  );
};

export default MyListing;
