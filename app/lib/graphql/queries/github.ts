import { gql } from "@apollo/client";

export const WHO_AM_I = gql`
  query whoAmI {
    viewer {
      login
      email
      location
    }
  }
`;
