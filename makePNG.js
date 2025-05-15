import { PNG } from "https://code4fukui.github.io/PNG/PNG.js";

const font = JSON.parse(await Deno.readTextFile("ichigojam-font.json"));

const w = 16;
const h = 16;
const iw = w * 8;
const ih = h * 8;
const image = new Uint8Array(iw * ih * 4);
for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    const n = font[j + i * w];
    for (let y = 0; y < 8; y++) {
      const n2 = parseInt(n.substring(y * 2, y * 2 + 2), 16);
      for (let x = 0; x < 8; x++) {
        const x0 = j * 8 + x;
        const y0 = i * 8 + y;
        const c = (n2 & (128 >> x)) ? 0xffffffff : 0x000000ff;
        let idx = (x0 + y0 * iw) * 4;
        image[idx++] = c >> 24;
        image[idx++] = c >> 16;
        image[idx++] = c >> 8;
        image[idx] = c;
      }
    }
  }
}
//console.log(image.length, iw, ih);

const bin = PNG.encode({ data: image, width: iw, height: ih });
await Deno.writeFile("ichigojam-font.png", bin);
