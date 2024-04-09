import { StrapiBrand } from "../components/Shared/types";

const FontFaceObserver = require("fontfaceobserver");

const Fonts = (font: StrapiBrand["font"]) => {
  const { Url, Family } = font;
  const link = document.createElement("link");
  link.href = Url;
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const roboto = new FontFaceObserver(Family);

  roboto.load().then(() => {
    console.log(Family.toLowerCase());
    document.documentElement.classList.add(Family.toLowerCase());
  });
};

export default Fonts;
