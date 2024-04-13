import { Flex, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import { RichText } from "../Shared/RichText";
import { StrapiBrand, StrapiFooter, StrapiHero } from "../../types";

const SocialButtonStyle = (sharedProps: {
  bgColor: string;
  borderColor: string;
  borderRadius: string;
  borderWidth: string;
}) => ({
  boxSize: "48px",
  p: 2,
  bgColor: sharedProps.bgColor,
  borderRadius: sharedProps.borderRadius,
  border: `${sharedProps.borderWidth} solid ${sharedProps.borderColor}`,
  justifyContent: "center",
  alignItems: "center",
});

interface FooterProps {
  brand: StrapiBrand;
  // TODO - Refactor after color palette refactor
  hero: StrapiHero;
  footer: StrapiFooter;
}

export const Footer = ({ brand, hero, footer }: FooterProps) => {
  const sharedProps = {
    bgColor: hero.buttons[0].bgColor,
    borderColor: hero.buttons[0].borderColor,
    borderRadius: hero.buttons[0].borderRadius,
    borderWidth: hero.buttons[0].borderWidth,
  };
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
              <Flex {...SocialButtonStyle(sharedProps)}>
                <InstagramLogo size={32} color={brand.light} />
              </Flex>
            </Link>
          )}
          {footer.facebookUrl && (
            <Link href={footer.facebookUrl} target="_blank">
              <Flex {...SocialButtonStyle(sharedProps)}>
                <FacebookLogo size={32} color={brand.light} />
              </Flex>
            </Link>
          )}
          {footer.twitterUrl && (
            <Link href={footer.twitterUrl} target="_blank">
              <Flex {...SocialButtonStyle(sharedProps)}>
                <TwitterLogo size={32} color={brand.light} />
              </Flex>
            </Link>
          )}
        </HStack>
        <RichText
          content={footer.text}
          fontFamily={"Arial"}
          textShadow="1px 1px 1px black"
        />
      </Stack>
    </Flex>
  );
};
