"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { H1, H3, H5, Paragraph } from "../Typography";
import { RichText } from "../Shared/RichText";
import NextLink from "next/link";
import Link from "next/link";

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

export const ContactForm = ({ sections, brand }) => {
  const bgColor =
    sections.length % 3 === 0
      ? "secondary"
      : sections.length % 2 === 0
      ? "primary"
      : "light";

  const color = bgColor === "light" ? "primary" : "light";

  return (
    <Flex
      id={`contact`}
      w="100%"
      h="2xl"
      color={brand[color]}
      textShadow={color === "light" ? `1px 1px 5px ${brand.primary}` : "none"}
    >
      <Background bgColor={brand[bgColor]} />
      <Stack zIndex={10} gap={3} w="100%" m={3}>
        <H3 my="1rem">Contact</H3>
        <H5>Name: *</H5>
        <Input
        // placeholder="Name"
        />
        <H5>Company:</H5>
        <Input
        // placeholder="Company"
        />
        <H5>Email: *</H5>
        <Input
        // placeholder="Email"
        />
        <H5>Message: *</H5>
        <Textarea
        // placeholder="Message"
        />
        {/* <Link href="mailto:danwarrickdev@gmail.com" passHref legacyBehavior>
          <Button as="a">Login</Button>
        </Link> */}
        <a href="mailto:danwarrickdev@gmail.com">
          <Button
            bgColor={brand.dark}
            border={`2px solid ${brand.light}`}
            color={brand.light}
            mt={"1.5rem"}
            w={"100%"}
            as="a"
          >
            Submit
          </Button>
        </a>
      </Stack>
      {/* <Flex
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
                <Box
                  bgColor={bgColor === "light" ? brand.primary : brand.light}
                  p={1}
                >
                  <Image boxSize={"sm"} src={image.url} />
                </Box>
                <Paragraph>{caption}</Paragraph>
              </Box>
            ) : null}
            <Box>
              <H3>{header}</H3>
              <RichText content={text} />
            </Box>
            {!altLayout ? (
              <Box>
                <Box
                  bgColor={bgColor === "light" ? brand.primary : brand.light}
                  p={1}
                >
                  <Image boxSize={"sm"} src={image.url} />
                </Box>
                <Paragraph>{caption}</Paragraph>
              </Box>
            ) : null}
          </Stack>
        </Box>
      </Flex> */}
    </Flex>
  );
};
