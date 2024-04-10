import { Box } from "@chakra-ui/react";
import React from "react";
import { StrapiStyledImage } from "../types";
import { Image } from "../Image";

interface SectionBgProps {
  image: StrapiStyledImage;
}

export const SectionBg = ({ image }: SectionBgProps) => {
  console.log({ image });
  return (
    <Box position={"absolute"} w="100%" height="100%">
      <Image
        objectFit="cover"
        height="100%"
        w={"100%"}
        position={"absolute"}
        border={"2px dashed blue"}
        {...image}
      />
    </Box>
  );
};
