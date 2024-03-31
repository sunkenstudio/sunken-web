// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BASE_URL } from "./urls";

export function Providers({ children }: { children: React.ReactNode }) {
  const client = new ApolloClient({
    uri: `${BASE_URL}/graphql`,
    cache: new InMemoryCache(),
  });
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ChakraProvider>
  );
}
