import { makeIchigoJamFont, SCALE } from "./makeIchigoJamFont.js";
import { dot2svg } from "https://code4fukui.github.io/dot2svg/dot2svg.js";
import { svg2path } from "./svg2path.js";
import { fontdata2dot } from "./fontdata2dot.js";

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
