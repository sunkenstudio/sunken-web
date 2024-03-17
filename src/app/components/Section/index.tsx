import { Flex } from "@chakra-ui/react";
import React from "react";

export const Section = ({
  header = "MISSING",
  bgColor = "primary",
  color = "white",
}) => {
  const COLORS = {
    primary: "teal",
    secondary: "#81E6D9",
    white: "white",
  };
  return (
    <Flex
      bg={COLORS[bgColor]}
      color={COLORS[color]}
      w="100%"
      m="0 auto"
      h="2xl"
      direction={"column"}
      p={4}
    >
      <h1>{header}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Flex>
  );
};
