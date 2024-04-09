import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { Barlow, Handlee, Raleway, Manrope, Quicksand } from "next/font/google";

// Import the weights and subsets, add any other config here as well
const font1 = Handlee({
  weight: ["400"],
  subsets: ["latin"],
});

// Import the weights and subsets, add any other config here as well
const font2 = Barlow({
  weight: ["400"],
  subsets: ["latin"],
});

const font3 = Raleway({
  weight: ["400"],
  subsets: ["latin"],
});

const font4 = Quicksand({
  weight: ["400"],
  subsets: ["latin"],
});

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  heading: font3.style.fontFamily,
  body: font4.style.fontFamily,
};

export const breakpoints = {
  sm: "48em",
  md: "62em",
  lg: "80em",
  xl: "96em",
  "2xl": "128em",
};

// 3. extend the theme
const theme = extendTheme({ breakpoints, config });

export default theme;
