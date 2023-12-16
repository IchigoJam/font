import { Path } from "https://code4fukui.github.io/opentype-es/opentype.js";
import { makeIchigoJamFont, SCALE } from "./makeIchigoJamFont.js";

await makeIchigoJamFont("IchigoJam_font_dot", (fontdata) => {
  const path = new Path();
  const o = SCALE / 10;
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if (parseInt(fontdata.substring(y * 2, y * 2 + 2), 16) & (1 << (7 - x))) {
        const y2 = 7 - y;
        path.moveTo(x * SCALE + o, y2 * SCALE + o);
        path.lineTo((x + 1) * SCALE - o, y2 * SCALE + o);
        path.lineTo((x + 1) * SCALE - o, (y2 + 1) * SCALE - o);
        path.lineTo(x * SCALE + o, (y2 + 1) * SCALE - o);
      }
    }
  }
  return path;
});
