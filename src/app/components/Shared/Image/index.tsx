import React from "react";
import {
  Box,
  Image as ChakraImage,
  ImageProps as ChakraImageProps,
  ChakraStyledOptions,
} from "@chakra-ui/react";
import { StrapiStyledImage } from "../../../types";

type ImageProps = StrapiStyledImage & ChakraStyledOptions;

export const Image = ({
  media = { typename: "", url: "" },
  alt,
  borderWidth,
  borderColor,
  borderRadius,
  grayscalePercent,
  filterColor,
  filterOpacity,
  ...rest
}: ImageProps) => {
  const border =
    borderWidth && borderColor ? `${borderWidth} solid ${borderColor}` : "";
  return (
    <Box position={"relative"} height={"100%"} width={"100%"}>
      <ChakraImage
        src={media.url}
        alt={alt}
        border={border}
        borderRadius={borderRadius || ""}
        filter={`grayscale(${grayscalePercent}%)`}
        {...rest}
      />
      <Box
        borderRadius={borderRadius || ""}
        bgColor={filterColor || ""}
        opacity={filterOpacity}
        height={"100%"}
        width={"100%"}
        position={"absolute"}
        top={0}
        bottom={0}
        left={0}
        right={0}
      />
    </Box>
  );
};
