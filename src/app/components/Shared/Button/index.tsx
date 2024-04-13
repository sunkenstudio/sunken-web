import { Button as ChakraButton, ChakraStyledOptions } from "@chakra-ui/react";
import React from "react";
import { scrollToElement } from "@/app/helpers/utils";

type ButtonProps = ChakraStyledOptions;
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
    fontFamily: "Arial",
    textShadow: "1px 1px 1px black",
    ...rest,
  };
  if (type === "link") {
    if (href.includes("#")) {
      return (
        <a onClick={scrollToElement} href={href} style={{ width: "100%" }}>
          <ChakraButton {...commonProps} w={{ base: "100%", md: "45%" }}>
            {text}
          </ChakraButton>
        </a>
      );
    }
    return (
      <a href={href} style={{ width: "100%" }}>
        <ChakraButton {...commonProps}>{text}</ChakraButton>
      </a>
    );
  }
  if (type === "submit") {
    return (
      <ChakraButton type="submit" {...commonProps}>
        {text}
      </ChakraButton>
    );
  }
  return <>MISSING BUTTON IMPLEMENTATION</>;
};
