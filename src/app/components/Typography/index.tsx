import React from "react";
import { Heading, Text } from "@chakra-ui/react";

const H1 = ({ children, ...rest }) => (
  <Heading as="h1" size="4xl" {...rest}>
    {children}
  </Heading>
);

const H2 = ({ children, ...rest }) => (
  <Heading as="h2" size="3xl" {...rest}>
    {children}
  </Heading>
);

const H3 = ({ children, ...rest }) => (
  <Heading as="h3" size="xl" {...rest}>
    {children}
  </Heading>
);

const H4 = ({ children, ...rest }) => (
  <Heading as="h4" size="md" {...rest}>
    {children}
  </Heading>
);

const H5 = ({ children, ...rest }) => (
  <Heading as="h5" size="sm" {...rest}>
    {children}
  </Heading>
);

const H6 = ({ children, ...rest }) => (
  <Heading as="h6" size="xs" {...rest}>
    {children}
  </Heading>
);

const Paragraph = ({ children, ...rest }) => (
  <Text as="p" size="1.25rem" {...rest}>
    {children}
  </Text>
);

export { H1, H2, H3, H4, H5, H6, Paragraph };
