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
  StackDivider,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { H3, H5 } from "../Typography";
import { List } from "@phosphor-icons/react";
import { upperCase } from "lodash";

export const Header = ({ sections, brand }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleScroll = (e) => {
    onClose();
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box position="fixed" top="0px" w="100%" zIndex={999}>
      <Flex>
        <Box />
        <Spacer />
        <Button
          ref={btnRef}
          m={4}
          onClick={onOpen}
          boxSize={"48px"}
          p={2}
          bgColor={brand.dark}
          borderRadius={".5rem"}
          border={`2px solid ${brand.light}`}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <List size={32} color={brand.light} />
        </Button>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          border={`2px solid ${brand.light}`}
          bgColor={brand.secondary}
        >
          <DrawerCloseButton />
          <Stack mt={"3rem"} alignItems={"center"} p={3} gap={"2rem"}>
            <H3 color={brand.light}>Sunken Studio</H3>
            <Divider orientation="horizontal" />
            <Box
              color={brand.light}
              bgColor={brand.dark}
              border={`2px solid ${brand.light}`}
              borderRadius={".5rem"}
              p={2}
            >
              <H5>
                <a onClick={handleScroll} href={`#hero`}>
                  HOME
                </a>
              </H5>
            </Box>
            {sections.map((i) => (
              <Box
                key={`modal-link-${i.sortOrder}`}
                color={brand.light}
                bgColor={brand.dark}
                border={`2px solid ${brand.light}`}
                borderRadius={".5rem"}
                p={2}
              >
                <H5>
                  <a onClick={handleScroll} href={`#section-${i.sortOrder}`}>
                    {upperCase(i.header)}
                  </a>
                </H5>
              </Box>
            ))}
          </Stack>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};