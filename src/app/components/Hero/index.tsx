"use client";
import { Box, Button, Flex, HStack, Hide, Stack } from "@chakra-ui/react";
import React from "react";
import { H1, H3, Paragraph } from "../Typography";
import { Image } from "../Shared/Image";
import { RichText } from "../Shared/RichText";
import { SectionBg } from "../Shared/SectionBg";

export const Hero = ({
  header,
  subheader,
  text,
  button1,
  button2,
  image,
  brand,
  bgFilterOpacity,
  bgImage,
  bgImageOpacity,
}) => {
  return (
    <Flex id="hero" color={brand.light} w="100%" h="2xl">
      <SectionBg
        bgColor={brand.primary}
        bgFilterOpacity={bgFilterOpacity}
        bgImage={bgImage}
        bgImageOpacity={bgImageOpacity}
      />
      <Flex
        zIndex={10}
        direction={{ base: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        w="100%"
        h="2xl"
      >
        <Box alignItems={"left"} w={{ base: "90%", md: "50%" }}>
          <Stack gap={3}>
            <H1 textShadow={`1px 1px 3px ${brand.dark}`}>{header}</H1>
            <H3 textShadow={`1px 1px 3px ${brand.dark}`}>{subheader}</H3>
            <Paragraph textShadow={`1px 1px 3px ${brand.dark}`}>
              <RichText content={text} />
            </Paragraph>
            <HStack mt={3} gap={3}>
              <Button
                bgColor={brand.dark}
                border={`2px solid ${brand.light}`}
                onClick={() => console.log("click1")}
                color={brand.light}
              >
                {button1}
              </Button>
              <Button
                colorScheme="transparent"
                border={`2px solid ${brand.light}`}
                onClick={() => console.log("click2")}
              >
                {button2}
              </Button>
            </HStack>
          </Stack>
        </Box>
        <Hide below="md">
          <Box bgColor={brand.light} p={1}>
            <Image boxSize={"md"} url={image.url} objectFit={"cover"} />
          </Box>
        </Hide>
      </Flex>
    </Flex>
  );
};
