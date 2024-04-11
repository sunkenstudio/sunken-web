import React from "react";
import { ChakraProps, Heading, Text } from "@chakra-ui/react";

interface HeaderProps extends ChakraProps {
  children: React.ReactNode;
}

const H1 = ({ children, ...rest }: HeaderProps) => (
  <Heading as="h1" fontFamily={"inherit"} size="4xl" {...rest}>
    {children}
  </Heading>
);

const H2 = ({ children, ...rest }: HeaderProps) => (
  <Heading as="h2" fontFamily={"inherit"} size="3xl" {...rest}>
    {children}
  </Heading>
);

const H3 = ({ children, ...rest }: HeaderProps) => (
  <Heading as="h3" fontFamily={"inherit"} size="xl" {...rest}>
    {children}
  </Heading>
);

const H4 = ({ children, ...rest }: HeaderProps) => (
  <Heading as="h4" fontFamily={"inherit"} size="md" {...rest}>
    {children}
  </Heading>
);

const H5 = ({ children, ...rest }: HeaderProps) => (
  <Heading as="h5" fontFamily={"inherit"} size="sm" {...rest}>
    {children}
  </Heading>
);

const H6 = ({ children, ...rest }: HeaderProps) => (
  <Heading as="h6" fontFamily={"inherit"} size="xs" {...rest}>
    {children}
  </Heading>
);

const Paragraph = ({ children, ...rest }: HeaderProps) => (
  <Text as="p" size="1.5rem" {...rest}>
    {children}
  </Text>
);

export { H1, H2, H3, H4, H5, H6, Paragraph };
