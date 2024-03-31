import { Box, Flex, HStack, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { H3, Paragraph } from "../Typography";

const Background = ({ bgColor }) => (
  <>
    <Box bg={bgColor} w="100%" h="2xl" position={"absolute"} />
    <Image
      w="100%"
      h="2xl"
      src={"texture-2.jpg"}
      position={"absolute"}
      objectFit="cover"
      opacity={0.25}
    />
    <Box bg={bgColor} w="100%" h="2xl" opacity={0.5} position={"absolute"} />
  </>
);

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
  console.log(bgColor);
  return (
    <Flex
      id={id}
      w="100%"
      m="0 auto"
      h="2xl"
      direction={"column"}
      color={COLORS[color]}
      textShadow={color === "white" ? `1px 1px 5px ${COLORS.primary}` : "none"}
    >
      <Background bgColor={COLORS[bgColor]} />
      <Flex w="100%" m="0 auto" h="2xl" direction={"column"} zIndex={999}>
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
    </Flex>
  );
};
