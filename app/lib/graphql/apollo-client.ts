import { InMemoryCache } from "@apollo/client";
import { ApolloClient, HttpLink } from "@apollo/client";
import {} from "@apollo/client/react";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.BASE_URL,
      headers: {
        Authorization: `Bearer ${process.env.PAT}`,
      },
    }),
    cache: new InMemoryCache(),
  });
};

export const apolloClient = createApolloClient();
