import { Box, Flex, Image, Stack } from "@chakra-ui/react";
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
  const imgBorderColor = bgColor === "light" ? brand.primary : brand.light;
  return (
    <Flex
      id={`section-${sortOrder}`}
      w="100%"
      h="2xl"
      color={brand[color]}
      textShadow={color === "light" ? `1px 1px 5px ${brand.primary}` : "none"}
    >
      <Background bgColor={brand[bgColor]} />
      <Flex
        w="100%"
        h="2xl"
        zIndex={10}
        direction={{ base: "column", md: "row" }}
        m={{ base: "1rem", md: "" }}
      >
        <Box justifyContent={"center"} alignItems={"center"} h="100%" gap={"5"}>
          <Stack w="100%">
            {altLayout ? (
              <Box>
                <Image
                  boxSize={"sm"}
                  src={image.url}
                  border={`.25rem solid ${imgBorderColor}`}
                  objectFit={"cover"}
                />
                <Paragraph>{caption}</Paragraph>
              </Box>
            ) : null}
            <Box>
              <H3>{header}</H3>
              <RichText content={text} />
            </Box>
            {!altLayout ? (
              <Box>
                <Image
                  boxSize={"sm"}
                  src={image.url}
                  border={`.25rem solid ${imgBorderColor}`}
                  objectFit={"cover"}
                />
                <Paragraph>{caption}</Paragraph>
              </Box>
            ) : null}
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};
