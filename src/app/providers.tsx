// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BASE_URL } from "./urls";
import theme from "./styles/theme";
import { BrandProvider } from "./contexts/BrandContext";

export function Providers({ children }: { children: React.ReactNode }) {
  const client = new ApolloClient({
    uri: `${BASE_URL}/graphql`,
    cache: new InMemoryCache(),
  });
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <BrandProvider>{children}</BrandProvider>
      </ApolloProvider>
    </ChakraProvider>
  );
}
