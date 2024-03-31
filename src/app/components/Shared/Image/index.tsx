import React from "react";
import { Image as ChakraImage } from "@chakra-ui/react";
export const Image = ({ url, ...rest }) => {
  return <ChakraImage src={url} {...rest} />;
};
