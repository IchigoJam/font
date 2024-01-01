import * as t from "https://deno.land/std/testing/asserts.ts";
import { ijfont2dot, ijfont2svg } from "./ijfont2svg.js";

Deno.test("simple", () => {
  t.assertEquals(ijfont2svg("A", 1), `<path d="M1.2,1L1.8,1Q2,1 2,1.2L2,2.8Q2,3 2.2,3L4.8,3Q5,3 5,2.8L5,1.2Q5,1 5.2,1L5.8,1Q6,1 6,1.2L6,6.8Q6,7 5.8,7L5.2,7Q5,7 5,6.8L5,4.2Q5,4 4.8,4L2.2,4Q2,4 2,4.2L2,6.8Q2,7 1.8,7L1.2,7Q1,7 1,6.8L1,1.2Q1,1 1.2,1M2.2,7L4.8,7Q5,7 5,7.2L5,7.8Q5,8 4.8,8L2.2,8Q2,8 2,7.8L2,7.2Q2,7 2.2,7"/>`);
});
Deno.test("ijfont2dot", () => {
  t.assertEquals(ijfont2dot("A", 1), `00000000
01000100
01000100
01111100
01000100
01000100
01000100
00111000`);
  t.assertEquals(ijfont2dot("B", 1), `00000000
01111000
00100100
00100100
00111000
00100100
00100100
01111000`);
});
Deno.test("ijfont2dot", () => {
  t.assertEquals(ijfont2dot("AB", 1), `0000000000000000
0100010001111000
0100010000100100
0111110000100100
0100010000111000
0100010000100100
0100010000100100
0011100001111000`);
});
