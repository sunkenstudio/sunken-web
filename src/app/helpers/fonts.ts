import { snakeCase } from "lodash";
import { StrapiBrand } from "../components/Shared/types";

const FontFaceObserver = require("fontfaceobserver");

const Fonts = (fonts: StrapiBrand["fonts"]) => {
  fonts.forEach((font) => {
    const { url, family } = font;
    const link = document.createElement("link");
    link.href = url;
    link.rel = "stylesheet";

    document.head.appendChild(link);

    const roboto = new FontFaceObserver(family);
    roboto.load().then(() => {
      document.documentElement.classList.add(snakeCase(family));
    });
  });
};

export default Fonts;
