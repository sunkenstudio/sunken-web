import { Box, Flex, HStack, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { H3, Paragraph } from "../Typography";

export const Section = ({
  id,
  header = "MISSING",
  bgColor = "primary",
  color = "white",
  altLayout = false,
}) => {
  const COLORS = {
    primary: "teal",
    secondary: "#81E6D9",
    white: "white",
  };
  return (
    <Flex
      id={id}
      bg={COLORS[bgColor]}
      color={COLORS[color]}
      textShadow={color === "white" ? `1px 1px 5px ${COLORS.primary}` : "none"}
      w="100%"
      m="0 auto"
      h="2xl"
      direction={"column"}
      p={4}
    >
      <HStack
        justifyContent={"center"}
        alignItems={"center"}
        h="100%"
        gap={"5"}
      >
        {altLayout ? (
          <Stack>
            <Box bgColor={bgColor === "white" ? "teal" : "white"} p={1}>
              <Image
                boxSize={"sm"}
                src="https://images.unsplash.com/photo-1560257452-1ddd4ec09251?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Box>
            <Paragraph>descriptive text goes here...</Paragraph>
          </Stack>
        ) : null}
        <Stack maxW="40%">
          <H3>{header}</H3>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
        </Stack>
        {!altLayout ? (
          <Stack>
            <Box bgColor={bgColor === "white" ? "teal" : "white"} p={1}>
              <Image
                boxSize={"sm"}
                src="https://images.unsplash.com/photo-1560257452-1ddd4ec09251?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Box>
            <Paragraph>descriptive text goes here...</Paragraph>
          </Stack>
        ) : null}
      </HStack>
    </Flex>
  );
};
