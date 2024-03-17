import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Img,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Flex
      bottom={"0px"}
      position={"fixed"}
      justifyContent={"center"}
      w="100%"
      bgColor={"white"}
    >
      <Stack>
        {/* <HStack gap={3} mb={2}>
          <Spacer />
          <Image
            boxSize="48px"
            objectFit="cover"
            src={"arrow-circle-down.svg"}
            alt="arrow down icon"
            color={"teal"}
          />
          <Spacer />
        </HStack> */}
        <HStack gap={3} m="1rem">
          <Image
            boxSize="32px"
            objectFit="cover"
            src={"instagram-logo.svg"}
            alt="instagram icon"
            color={"teal"}
          />
          <Image
            boxSize="32px"
            objectFit="cover"
            src={"facebook-logo.svg"}
            alt="facebook icon"
            color={"teal"}
          />
          <Image
            boxSize="32px"
            objectFit="cover"
            src={"twitter-logo.svg"}
            alt="twitter icon"
            color={"teal"}
          />
        </HStack>
      </Stack>
    </Flex>
  );
};
