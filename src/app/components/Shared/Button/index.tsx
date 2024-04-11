import { Button as ChakraButton, ChakraStyledOptions } from "@chakra-ui/react";
import React from "react";
import { StrapiStyledButton } from "../types";
import { scrollToElement } from "@/app/helpers/utils";

type ButtonProps = StrapiStyledButton & ChakraStyledOptions;
export const Button = ({
  typename,
  type,
  text,
  href,
  icon,
  textColor,
  bgColor,
  borderColor,
  borderWidth,
  borderRadius,
  ...rest
}: ButtonProps) => {
  const commonProps = {
    id: typename,
    color: textColor,
    bgColor: bgColor,
    borderColor: borderColor,
    borderWidth: borderWidth,
    borderRadius: borderRadius,
    ...rest,
  };
  if (type === "link") {
    if (href.includes("#")) {
      return (
        <a onClick={scrollToElement} href={href}>
          <ChakraButton {...commonProps}>{text}</ChakraButton>
        </a>
      );
    }
    return (
      <a href={href}>
        <ChakraButton {...commonProps}>{text}</ChakraButton>
      </a>
    );
  }
  return <>MISSING BUTTON IMPLEMENTATION</>;
};
