import { fontdata2dot } from "./fontdata2dot.js";
import { dot2svg } from "https://code4fukui.github.io/dot2svg/dot2svg.js";

const url = "https://ichigojam.github.io/font/ichigojam-font.json";
const fontdata = await (await fetch(url)).json();

export const ijfont2dot = (s) => {
  if (typeof s == "number") {
    s = String.fromCharCode(s);
  }
  const d = [];
  for (let i = 0; i < 8; i++) {
    d[i] = "";
  }
  for (const c of s) {
    const f = fontdata[c.charCodeAt(0)];
    const data = fontdata2dot(f);
    const d2 = data.split("\n");
    for (let i = 0; i < d2.length; i++) {
      d[i] += d2[i];
    }
  }
  return d.join("\n");
};

export const ijfont2svg = (c, dotw = 1) => {
  const dot = ijfont2dot(c);
  const svg = dot2svg(dot, dotw, dotw * .2);
  return svg;
};
