import { Flex, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

export const Footer = ({ brand }) => {
  return (
    <Flex
      bottom={"0px"}
      position={"fixed"}
      justifyContent={"center"}
      w="100%"
      zIndex={999}
    >
      <Stack>
        <HStack gap={3} m="1rem">
          <Link href={"https://instagram.com"} target="_blank">
            <Flex
              boxSize={"48px"}
              p={2}
              bgColor={brand.dark}
              borderRadius={".5rem"}
              border={`2px solid ${brand.light}`}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <InstagramLogo size={32} color={brand.light} />
            </Flex>
          </Link>
          <Link href={"https://facebook.com"} target="_blank">
            <Flex
              boxSize={"48px"}
              p={2}
              bgColor={brand.dark}
              borderRadius={".5rem"}
              border={`2px solid ${brand.light}`}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <FacebookLogo size={32} color={brand.light} />
            </Flex>
          </Link>
          <Link href={"https://twitter.com"} target="_blank">
            <Flex
              boxSize={"48px"}
              p={2}
              bgColor={brand.dark}
              borderRadius={".5rem"}
              border={`2px solid ${brand.light}`}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <TwitterLogo size={32} color={brand.light} />
            </Flex>
          </Link>
        </HStack>
      </Stack>
    </Flex>
  );
};
