import { apolloClient } from "@/app/lib/graphql/apollo-client";
import { WHO_AM_I } from "@/app/lib/graphql/queries/github";

export default async function UserSession() {
  const data = await apolloClient.query<{
    viewer: { login: string; email: string; location: string };
  }>({
    query: WHO_AM_I,
  });

  return (
    <div>
      <div>
        <span>Username: </span>
        <span>{data.data?.viewer.login}</span>
      </div>
      {data.data?.viewer.email && (
        <div>
          <span>Email: </span>
          <span>{data.data?.viewer.email}</span>
        </div>
      )}
      {data.data?.viewer.location && (
        <div>
          <span>Location: </span>
          <span>{data.data?.viewer.location}</span>
        </div>
      )}
    </div>
  );
}
