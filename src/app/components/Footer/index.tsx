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
    <Flex bottom={"0px"} position={"fixed"} justifyContent={"center"} w="100%">
      <Stack>
        <HStack gap={3} m="1rem">
          <Image
            boxSize="48px"
            objectFit="cover"
            src={"instagram-logo.svg"}
            alt="instagram icon"
            color={"teal"}
            bgColor={"white"}
            borderRadius={".5rem"}
            p={2}
            shadow={"sm"}
          />
          <Image
            boxSize="48px"
            objectFit="cover"
            src={"facebook-logo.svg"}
            alt="facebook icon"
            color={"teal"}
            bgColor={"white"}
            borderRadius={".5rem"}
            p={2}
            shadow={"sm"}
          />
          <Image
            boxSize="48px"
            objectFit="cover"
            src={"twitter-logo.svg"}
            alt="twitter icon"
            color={"teal"}
            bgColor={"white"}
            borderRadius={".5rem"}
            p={2}
            shadow={"sm"}
          />
        </HStack>
      </Stack>
    </Flex>
  );
};
