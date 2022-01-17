import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($creds: UsersPermissionsLoginInput!) {
    login(input: $creds) {
      user {
        id
        username
        email
        blocked
      }
    }
  }
`;
