import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { StrapiImage } from "../types";

interface SectionBgProps {
  bgColor: string;
  bgFilterOpacity: number;
  bgImage: StrapiImage;
  bgImageOpacity: number;
}

export const SectionBg = ({
  bgColor,
  bgFilterOpacity,
  bgImage,
  bgImageOpacity,
}: SectionBgProps) => (
  <Box position={"absolute"} w="100%" height="100%">
    <Box bg={"#000"} w="100%" h="100%" position={"absolute"} />
    <Image
      src={bgImage.url}
      objectFit="cover"
      opacity={bgImageOpacity}
      filter="grayscale(100%)"
      height="100%"
      w={"100%"}
      position={"absolute"}
    />
    <Box
      bg={bgColor}
      w="100%"
      h="100%"
      opacity={bgFilterOpacity}
      position={"absolute"}
    />
  </Box>
);
