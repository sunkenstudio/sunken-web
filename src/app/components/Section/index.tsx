import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { H3, Paragraph } from "../Typography";
import { RichText } from "../Shared/RichText";
import { SectionBg } from "../Shared/SectionBg";
import { StrapiBrand, StrapiSection } from "../Shared/types";
import { Image } from "../Shared/Image";

interface SectionProps {
  section: StrapiSection;
  brand: StrapiBrand;
}

export const Section = ({ section, brand }: SectionProps) => {
  const {
    header = "MISSING",
    sortOrder,
    text,
    image,
    caption,
    bgImage,
  } = section;

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
      color={brand[color]}
      textShadow={color === "light" ? `1px 1px 3px ${brand.dark}` : "none"}
      position="relative"
      minH={"2xl"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SectionBg image={bgImage} />
      <Flex w="100%" h="100%">
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          h="100%"
          gap={"5"}
          zIndex={10}
        >
          <Flex
            w="100%"
            h="100%"
            direction={{ base: "column", md: "row" }}
            justifyContent={"center"}
            alignItems={"center"}
            p={{ base: ".5rem", md: "0rem" }}
          >
            {altLayout ? (
              <Stack
                w={{ base: "100%", md: "45%" }}
                justifyContent={"center"}
                alignItems={"center"}
                mb={{ base: ".5rem", md: "0rem" }}
              >
                <Box>
                  <Image
                    boxSize={{ base: "sm", md: "md" }}
                    {...image}
                    objectFit={"cover"}
                  />
                </Box>
                {/* <Image
                  boxSize={{ base: "sm", md: "md" }}
                  src={image.url}
                  border={`.25rem solid ${imgBorderColor}`}
                  objectFit={"cover"}
                /> */}
                <Paragraph>{caption}</Paragraph>
              </Stack>
            ) : null}
            <Box w={{ base: "100%", md: "45%" }}>
              <H3>{header}</H3>
              <RichText content={text} />
            </Box>
            {!altLayout ? (
              <Stack
                w={{ base: "100%", md: "45%" }}
                justifyContent={"center"}
                alignItems={"center"}
                mt={{ base: ".5rem", md: "0rem" }}
              >
                <Box>
                  <Image
                    boxSize={{ base: "sm", md: "md" }}
                    {...image}
                    objectFit={"cover"}
                  />
                </Box>
                <Paragraph>{caption}</Paragraph>
              </Stack>
            ) : null}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
