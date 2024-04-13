// @ts-nocheck
"use client";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Spacer,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { H3, H5 } from "../Typography";
import { List } from "@phosphor-icons/react";
import { scrollToElement } from "@/app/helpers/utils";
import { StrapiBrand, StrapiHero, StrapiSection } from "../../types";

interface HeaderProps {
  hero: StrapiHero;
  sections: StrapiSection[];
  brand: StrapiBrand;
}

export const Header = ({ hero, sections, brand }: HeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sharedProps = {
    bgColor: hero.buttons[0].bgColor,
    borderColor: hero.buttons[0].borderColor,
    borderRadius: hero.buttons[0].borderRadius,
    borderWidth: hero.buttons[0].borderWidth,
    textColor: hero.buttons[0].textColor,
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClose();
    scrollToElement(e);
  };

  return (
    <Box position="fixed" top="0px" w="100%" zIndex={999}>
      <Flex>
        <Box />
        <Spacer />
        <Button
          m={4}
          onClick={onOpen}
          boxSize={"48px"}
          p={2}
          justifyContent={"center"}
          alignItems={"center"}
          {...sharedProps}
        >
          <List size={32} color={brand.light} />
        </Button>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          border={`4px solid ${brand.light}`}
          bgColor={brand.secondary}
          fontFamily={brand?.fonts?.[0]?.family}
        >
          <DrawerCloseButton />
          <Stack mt={"3rem"} alignItems={"center"} p={3} gap={"2rem"}>
            <H3 color={brand.light}>{brand.companyName}</H3>
            <Divider orientation="horizontal" />
            <a
              onClick={handleScroll}
              href={`#hero`}
              style={{ minWidth: "70%" }}
            >
              <Box
                color={brand.light}
                bgColor={brand.dark}
                border={`2px solid ${brand.light}`}
                borderRadius={".5rem"}
                p={2}
                minW="70%"
              >
                <H5>Home</H5>
              </Box>
            </a>
            {sections.map((i) => (
              <a
                key={`modal-link-${i.sortOrder}`}
                onClick={handleScroll}
                href={`#section-${i.sortOrder}`}
                style={{ minWidth: "70%" }}
              >
                <Box
                  color={brand.light}
                  bgColor={brand.dark}
                  border={`2px solid ${brand.light}`}
                  borderRadius={".5rem"}
                  p={2}
                >
                  <H5>{i.header}</H5>
                </Box>
              </a>
            ))}
            <a
              onClick={handleScroll}
              href={`#contact`}
              style={{ minWidth: "70%" }}
            >
              <Box
                color={brand.light}
                bgColor={brand.dark}
                border={`2px solid ${brand.light}`}
                borderRadius={".5rem"}
                p={2}
                minW="70%"
              >
                <H5>Book An Event</H5>
              </Box>
            </a>
          </Stack>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
