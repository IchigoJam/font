import { Path } from "https://code4fukui.github.io/opentype-es/opentype.js";
import { parsePathCommands } from "./parsePathCommands.js";

export const svg2path = (svg) => {
  const n = svg.indexOf("d=\"");
  const m = svg.indexOf("\"", n + 3);
  const d = svg.substring(n + 3, m);
  const path = new Path();
  path.commands = parsePathCommands(d);
  return path;
};
