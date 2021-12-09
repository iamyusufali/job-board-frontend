import React, { useEffect } from "react";
import axios from "axios";

const JobListing = () => {
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`${process.env.API_BASE_URL}/jobs`);
    })();
  }, []);

  return <div>Job will be listed here.</div>;
};

export default JobListing;
