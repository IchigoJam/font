import { makeIchigoJamFont, SCALE } from "./makeIchigoJamFont.js";
import { dot2svg } from "https://code4fukui.github.io/dot2svg/dot2svg.js";
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";
import { Base2 } from "https://code4fukui.github.io/Base2/Base2.js";
import { svg2path } from "./svg2path.js";

export const fontdata2dot = (font) => {
  const res = [];
  for (let i = 7; i >= 0; i--) {
    res.push(Base2.encode(Base16.decode(font.substring(i * 2, i * 2 + 2))));
  }
  return res.join("\n");
};

await makeIchigoJamFont("IchigoJam_font_round", (fontdata) => {
  const data = fontdata2dot(fontdata);
  const svg = dot2svg(data, SCALE, SCALE / 5);
  const path = svg2path(svg);
  return path;
});

await makeIchigoJamFont("IchigoJam_font", (fontdata) => {
  const data = fontdata2dot(fontdata);
  const svg = dot2svg(data, SCALE, SCALE / 50);
  const path = svg2path(svg);
  return path;
});
