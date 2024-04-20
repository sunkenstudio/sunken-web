import { Flex, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import { RichText } from "../Shared/RichText";
import { StrapiFooter, StrapiHero } from "../../types";
import { useBrand } from "@/app/contexts/BrandContext";

const SocialButtonStyle = (sharedProps: {
  bgColor: string;
  borderColor: string | null;
  borderRadius: string | null;
  borderWidth: string | null;
}) => {
  const baseStyle = {
    boxSize: "48px",
    p: 2,
    justifyContent: "center",
    alignItems: "center",
    bgColor: "",
    borderRadius: "",
    border: "",
  };
  if (sharedProps.bgColor) {
    baseStyle.bgColor = sharedProps.bgColor;
  }
  if (sharedProps.borderRadius) {
    baseStyle.borderRadius = sharedProps.borderRadius;
  }
  if (sharedProps.borderWidth && sharedProps.borderColor) {
    baseStyle.border = `${sharedProps.borderWidth} solid ${sharedProps.borderColor}`;
  }
  return baseStyle;
};

interface FooterProps {
  hero: StrapiHero;
  footer: StrapiFooter;
}

export const Footer = ({ hero, footer }: FooterProps) => {
  const { colors } = useBrand();
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
        color={colors.light}
        textShadow={`1px 1px 0px ${colors.dark}`}
        fontSize={"x-small"}
        w="100%"
      >
        <HStack gap={3} justifyContent={"center"} w="100%">
          {footer.instagramUrl && (
            <Link href={footer.instagramUrl} target="_blank">
              <Flex {...SocialButtonStyle(sharedProps)}>
                <InstagramLogo size={32} color={colors.light} />
              </Flex>
            </Link>
          )}
          {footer.facebookUrl && (
            <Link href={footer.facebookUrl} target="_blank">
              <Flex {...SocialButtonStyle(sharedProps)}>
                <FacebookLogo size={32} color={colors.light} />
              </Flex>
            </Link>
          )}
          {footer.twitterUrl && (
            <Link href={footer.twitterUrl} target="_blank">
              <Flex {...SocialButtonStyle(sharedProps)}>
                <TwitterLogo size={32} color={colors.light} />
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
