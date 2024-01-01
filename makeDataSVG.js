import { encodeData } from "https://code4fukui.github.io/dataencoder/encodeData.js";

export const makeDataSVG = (o) => {
  if (typeof o == "string") o = new TextEncoder().encode(o);
  return encodeData("image/svg+xml", o);
};
