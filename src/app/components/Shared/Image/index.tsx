import React from "react";
import {
  Image as ChakraImage,
  ImageProps as ChakraImageProps,
} from "@chakra-ui/react";

interface ImageProps extends ChakraImageProps {
  url: string;
}
export const Image = ({ url, ...rest }: ImageProps) => {
  return <ChakraImage src={url} {...rest} />;
};
