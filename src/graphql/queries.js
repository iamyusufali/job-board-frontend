import { gql } from "@apollo/client";

export const GET_ALL_JOBS = gql`
  query GetAllJobs($start: Int, $limit: Int) {
    jobs(sort: "created_at:DESC", start: $start, limit: $limit) {
      id
      job_title
      job_type
      location
      description
    }
  }
`;
