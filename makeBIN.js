
const font = JSON.parse(await Deno.readTextFile("ichigojam-font.json"));

const bin = [];
for (let i = 0; i < 256; i++) {
  const n = font[i];
  for (let y = 0; y < 8; y++) {
    const n2 = parseInt(n.substring(y * 2, y * 2 + 2), 16);
    bin.push(n2);
    console.log(n2, n.substring(y * 2, y * 2 + 2))
  }
}

const bin2 = new Uint8Array(bin);
await Deno.writeFile("ichigojam-font.bin", bin2);
