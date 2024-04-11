"use client";
import { Box, Flex, HStack, Hide, Stack } from "@chakra-ui/react";
import React from "react";
import { H1, H3, Paragraph } from "../Typography";
import { Image } from "../Shared/Image";
import { RichText } from "../Shared/RichText";
import { SectionBg } from "../Shared/SectionBg";
import { StrapiBrand, StrapiHero } from "../Shared/types";
import { Button } from "../Shared/Button";

interface HeroProps {
  hero: StrapiHero;
  brand: StrapiBrand;
}

export const Hero = ({ brand, hero }: HeroProps) => {
  const { header, subheader, text, buttons, image, bgImage } = hero;
  return (
    <Flex
      id={"hero"}
      w="100%"
      color={brand.light}
      position="relative"
      minH={"2xl"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SectionBg image={bgImage} />
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
            <Paragraph
              textShadow={`1px 1px 3px ${brand.dark}`}
              w={{ base: "100%", md: "75%" }}
            >
              <RichText content={text} />
            </Paragraph>
            <HStack mt={3} gap={3} w="100%">
              {buttons.map((i) => {
                return <Button key={i.typename} {...i} />;
              })}
            </HStack>
          </Stack>
        </Box>
        <Hide below="md">
          <Box>
            <Image boxSize={"md"} {...image} objectFit={"cover"} />
          </Box>
        </Hide>
      </Flex>
    </Flex>
  );
};
