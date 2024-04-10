import { StrapiBrand } from "../components/Shared/types";

const FontFaceObserver = require("fontfaceobserver");

const Fonts = (font: StrapiBrand["font"]) => {
  const { url, family } = font;
  const link = document.createElement("link");
  link.href = url;
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const roboto = new FontFaceObserver(family);

  roboto.load().then(() => {
    document.documentElement.classList.add(family.toLowerCase());
  });
};

export default Fonts;
