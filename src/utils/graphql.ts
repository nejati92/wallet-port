// src/utils/graphql.js
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

export default new ApolloClient({
  // Provide the URL to the API server.
  link: new HttpLink({
    uri: "https://pmsphm65ejbtlnikkxsdmfvvdm.appsync-api.eu-west-1.amazonaws.com/graphql",
    headers: {
      "X-Api-Key": "da2-fbvjkquzyjgq7n3ptcfxvh5p7y",
    },
  }),
  // Using a cache for blazingly
  // fast subsequent queries.
  cache: new InMemoryCache(),
});
