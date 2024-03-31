import { Box, Flex, HStack, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { H3, Paragraph } from "../Typography";
import { RichText } from "../Shared/RichText";

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
  header = "MISSING",
  sortOrder,
  text,
  image,
  caption,
}) => {
  const COLORS = {
    primary: "teal",
    secondary: "#81E6D9",
    white: "white",
  };

  const bgColor =
    sortOrder % 3 === 0
      ? "primary"
      : sortOrder % 2 === 0
      ? "white"
      : "secondary";

  const color = bgColor === "white" ? "primary" : "white";

  const altLayout = sortOrder % 2 !== 0;
  return (
    <Flex
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
              <Paragraph>{caption}</Paragraph>
            </Stack>
          ) : null}
          <Stack maxW="40%">
            <H3>{header}</H3>
            <RichText content={text} />
          </Stack>
          {!altLayout ? (
            <Stack>
              <Box bgColor={bgColor === "white" ? "teal" : "white"} p={1}>
                <Image boxSize={"sm"} src={image.url} />
              </Box>
              <Paragraph>{caption}</Paragraph>
            </Stack>
          ) : null}
        </HStack>
      </Flex>
    </Flex>
  );
};
