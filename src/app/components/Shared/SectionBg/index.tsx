import { Box, Image } from "@chakra-ui/react";
import React from "react";

export const SectionBg = ({
  bgColor,
  bgFilterOpacity,
  bgImage,
  bgImageOpacity,
}) => (
  <>
    <Box bg={"#000"} w="100%" h="2xl" position={"absolute"} />
    <Image
      w="100%"
      h="2xl"
      src={bgImage.url}
      position={"absolute"}
      objectFit="cover"
      opacity={bgImageOpacity}
      filter="grayscale(100%)"
    />
    <Box
      bg={bgColor}
      w="100%"
      h="2xl"
      opacity={bgFilterOpacity}
      position={"absolute"}
    />
  </>
);
