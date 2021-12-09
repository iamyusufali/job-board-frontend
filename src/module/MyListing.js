import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
import { Flex } from "@chakra-ui/react";
import { useAuthContext } from "../context/AuthContext";

const MyListing = () => {
  const { authData } = useAuthContext();
  const [jobList, setJobList] = useState([]);

  const deleteJobHandler = async jobId => {
    try {
      await axios.delete(`${process.env.API_BASE_URL}/jobs/${jobId}`, {
        headers: {
          Authorization: `Bearer ${authData.info.jwt}`,
        },
      });

      setJobList(prevList => prevList.filter(job => job.id !== jobId));
    } catch (error) {}
  };

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`${process.env.API_BASE_URL}/jobs`);
      setJobList(data);
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
