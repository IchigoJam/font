import { Path } from "https://code4fukui.github.io/opentype-es/opentype.js";
import { makeIchigoJamFont, SCALE } from "./makeIchigoJamFont.js";
import { dot2svg } from "https://code4fukui.github.io/dot2svg/dot2svg.js";
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";
import { Base2 } from "https://code4fukui.github.io/Base2/Base2.js";
import { parsePathCommands } from "./parsePathCommands.js";

const fontdata2dot = (font) => {
  const res = [];
  for (let i = 7; i >= 0; i--) {
    res.push(Base2.encode(Base16.decode(font.substring(i * 2, i * 2 + 2))));
  }
  return res.join("\n");
};

const svg2path = (svg) => {
  const n = svg.indexOf("d=\"");
  const m = svg.indexOf("\"", n + 3);
  const d = svg.substring(n + 3, m);
  const path = new Path();
  path.commands = parsePathCommands(d);
  return path;
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
  console.log(fontdata, svg);
  const path = svg2path(svg);
  return path;
});
