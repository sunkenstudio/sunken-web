"use client";
import { Box, Button, Container, Flex, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { H1, H3 } from "../Typography";

const Background = () => (
  <>
    <Box bg="teal" w="100%" h="2xl" position={"absolute"} />
    <Image
      w="100%"
      h="2xl"
      src={"texture-2.jpg"}
      position={"absolute"}
      objectFit="cover"
      opacity={0.5}
    />
    <Box bg="teal" w="100%" h="2xl" opacity={0.5} position={"absolute"} />
  </>
);
export const Hero = ({ header, subheader, button1, button2, image }) => {
  return (
    <Flex id="hero" color="white" w="100%" h="2xl">
      <Background />
      <Flex
        zIndex={10}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        w="100%"
        h="2xl"
      >
        <Box alignItems={"left"} minW="50%">
          <H1>{header}</H1>
          <H3>{subheader}</H3>
          <HStack mt={3} gap={3}>
            <Button
              bgColor="black"
              border={"2px solid white"}
              onClick={() => console.log("click1")}
              color="white"
            >
              {button1}
            </Button>
            <Button
              colorScheme="transparent"
              border={"2px solid white"}
              onClick={() => console.log("click2")}
            >
              {button2}
            </Button>
          </HStack>
        </Box>
        <Box bgColor={"white"} p={1}>
          <Image
            boxSize={"md"}
            src="https://images.unsplash.com/photo-1560257452-1ddd4ec09251?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Box>
      </Flex>
    </Flex>
  );
};
