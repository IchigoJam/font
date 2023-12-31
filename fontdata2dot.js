import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";
import { Base2 } from "https://code4fukui.github.io/Base2/Base2.js";

export const fontdata2dot = (font) => {
  const res = [];
  for (let i = 7; i >= 0; i--) {
    res.push(Base2.encode(Base16.decode(font.substring(i * 2, i * 2 + 2))));
  }
  return res.join("\n");
};
