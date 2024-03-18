import React from "react";
import { Heading, Text } from "@chakra-ui/react";

const H1 = ({ children }) => (
  <Heading as="h1" size="4xl">
    {children}
  </Heading>
);

const H2 = ({ children }) => (
  <Heading as="h2" size="3xl">
    {children}
  </Heading>
);

const H3 = ({ children }) => (
  <Heading as="h3" size="xl">
    {children}
  </Heading>
);

const H4 = ({ children }) => (
  <Heading as="h4" size="md">
    {children}
  </Heading>
);

const H5 = ({ children }) => (
  <Heading as="h5" size="sm">
    {children}
  </Heading>
);

const H6 = ({ children }) => (
  <Heading as="h6" size="xs">
    {children}
  </Heading>
);

const Paragraph = ({ children }) => (
  <Text as="p" size="1.25rem">
    {children}
  </Text>
);

export { H1, H2, H3, H4, H5, H6, Paragraph };
