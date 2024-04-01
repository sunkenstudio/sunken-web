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
  brand,
}) => {
  const bgColor =
    sortOrder % 3 === 0
      ? "primary"
      : sortOrder % 2 === 0
      ? "light"
      : "secondary";

  const color = bgColor === "light" ? "primary" : "light";

  const altLayout = sortOrder % 2 !== 0;
  return (
    <Flex
      id={`section-${sortOrder}`}
      w="100%"
      m="0 auto"
      h="2xl"
      direction={"column"}
      color={brand[color]}
      textShadow={color === "light" ? `1px 1px 5px ${brand.primary}` : "none"}
    >
      <Background bgColor={brand[bgColor]} />
      <Flex w="100%" m="0 auto" h="2xl" direction={"column"} zIndex={5}>
        <HStack
          justifyContent={"center"}
          alignItems={"center"}
          h="100%"
          gap={"5"}
        >
          {altLayout ? (
            <Stack>
              <Box
                bgColor={bgColor === "light" ? brand.primary : brand.light}
                p={1}
              >
                <Image boxSize={"sm"} src={image.url} />
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
              <Box
                bgColor={bgColor === "light" ? brand.primary : brand.light}
                p={1}
              >
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
