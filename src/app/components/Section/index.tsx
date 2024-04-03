import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { H3, Paragraph } from "../Typography";
import { RichText } from "../Shared/RichText";
import { SectionBg } from "../Shared/SectionBg";

export const Section = ({
  header = "MISSING",
  sortOrder,
  text,
  image,
  caption,
  brand,
  bgFilterOpacity,
  bgImage,
  bgImageOpacity,
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
      <SectionBg
        bgColor={brand[bgColor]}
        bgFilterOpacity={bgFilterOpacity}
        bgImage={bgImage}
        bgImageOpacity={bgImageOpacity}
      />
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
