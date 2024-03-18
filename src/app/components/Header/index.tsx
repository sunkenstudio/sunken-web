"use client";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  Spacer,
  Stack,
  StackDivider,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { H3, H5 } from "../Typography";

export const Header = () => {
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
        <Button ref={btnRef} m={4} onClick={onOpen}>
          <Image
            boxSize="32px"
            objectFit="cover"
            src={"list.svg"}
            alt="list icon"
          />
        </Button>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Stack mt={"3rem"} alignItems={"center"} p={3} gap={3}>
            <H3>Sunken Studio</H3>
            <Divider orientation="horizontal" />
            <H5>
              <a onClick={handleScroll} href={"#hero"}>
                HOME
              </a>
            </H5>
            <StackDivider />
            <H5>
              <a onClick={handleScroll} href={"#section-1"}>
                SECTION 1
              </a>
            </H5>
            <StackDivider />
            <H5>
              <a onClick={handleScroll} href={"#section-2"}>
                SECTION 2
              </a>
            </H5>
            <StackDivider />
            <H5>
              <a onClick={handleScroll} href={"#section-3"}>
                SECTION 3
              </a>
            </H5>
          </Stack>
          {/* <Link href="#section-1">Section 1</Link>
          <Link href="#section-1">Section 2</Link>
          <Link href="#section-1">Section 3</Link> */}
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
