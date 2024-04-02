"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Hide,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { H1, H3, Paragraph } from "../Typography";
import { Image } from "../Shared/Image";
import { RichText } from "../Shared/RichText";

const Background = ({ primary }) => (
  <>
    <Box bg={primary} w="100%" h="2xl" position={"absolute"} />
    <Image
      w="100%"
      h="2xl"
      src={"texture-2.jpg"}
      position={"absolute"}
      objectFit="cover"
      opacity={0.5}
    />
    <Box bg={primary} w="100%" h="2xl" opacity={0.5} position={"absolute"} />
  </>
);
export const Hero = ({
  header,
  subheader,
  text,
  button1,
  button2,
  image,
  brand,
}) => {
  return (
    <Flex id="hero" color={brand.light} w="100%" h="2xl">
      <Background {...brand} />
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
            <H1>{header}</H1>
            <H3>{subheader}</H3>
            <Paragraph>
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
            <Image boxSize={"md"} url={image.url} />
          </Box>
        </Hide>
      </Flex>
    </Flex>
  );
};
