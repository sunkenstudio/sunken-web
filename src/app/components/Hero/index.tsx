"use client";
import { Box, Button, Container, Flex, HStack } from "@chakra-ui/react";
import React from "react";

export const Hero = () => {
  return (
    <Flex
      bg="teal"
      color="white"
      w="100%"
      h="2xl"
      direction={"column"}
      mt={"4rem"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <h1>Demo Demo Demo</h1>
      <h3>A short, optional description goes here!</h3>
      <HStack mt={3} gap={3}>
        <Button colorScheme="teal" onClick={() => console.log("click1")}>
          BUTTON 1
        </Button>
        <Button
          colorScheme="transparent"
          border={"2px solid white"}
          onClick={() => console.log("click2")}
        >
          BUTTON 2
        </Button>
      </HStack>
    </Flex>
  );
};
