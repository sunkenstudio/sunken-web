import { Flex, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import { RichText } from "../Shared/RichText";
import { StrapiBrand, StrapiFooter } from "../Shared/types";

const SocialButtonStyle = (brand: StrapiBrand) => ({
  boxSize: "48px",
  p: 2,
  bgColor: brand.dark,
  borderRadius: ".5rem",
  border: `2px solid ${brand.light}`,
  justifyContent: "center",
  alignItems: "center",
});

interface FooterProps {
  brand: StrapiBrand;
  footer: StrapiFooter;
}

export const Footer = ({ brand, footer }: FooterProps) => {
  return (
    <Flex
      bottom={0}
      left={0}
      right={0}
      position={"fixed"}
      justifyContent={"center"}
      w="100%"
      zIndex={999}
    >
      <Stack
        textAlign={"center"}
        color={brand.light}
        textShadow={`1px 1px 0px ${brand.dark}`}
        fontSize={"x-small"}
        w="100%"
      >
        <HStack gap={3} justifyContent={"center"} w="100%">
          {footer.instagramUrl && (
            <Link href={footer.instagramUrl} target="_blank">
              <Flex {...SocialButtonStyle(brand)}>
                <InstagramLogo size={32} color={brand.light} />
              </Flex>
            </Link>
          )}
          {footer.facebookUrl && (
            <Link href={footer.facebookUrl} target="_blank">
              <Flex {...SocialButtonStyle(brand)}>
                <FacebookLogo size={32} color={brand.light} />
              </Flex>
            </Link>
          )}
          {footer.twitterUrl && (
            <Link href={footer.twitterUrl} target="_blank">
              <Flex {...SocialButtonStyle(brand)}>
                <TwitterLogo size={32} color={brand.light} />
              </Flex>
            </Link>
          )}
        </HStack>
        <RichText content={footer.text} />
      </Stack>
    </Flex>
  );
};
