import * as t from "https://deno.land/std/testing/asserts.ts";
import { parsePathCommands } from "./parsePathCommands.js";

Deno.test("simple", () => {
  const d = "M1,0L69,0";
  t.assertEquals(parsePathCommands(d), [
    { type: "M", x: 1, y: 0 },
    { type: "L", x: 69, y: 0 },
  ]);
});

Deno.test("with space", () => {
  const d = "M1,0 L69,0";
  t.assertEquals(parsePathCommands(d), [
    { type: "M", x: 1, y: 0 },
    { type: "L", x: 69, y: 0 },
  ]);
});

Deno.test("with curve", () => {
  const d = "M1,0L69,0Q70,0 70,1C1,2 3,4 5,6Z";
  t.assertEquals(parsePathCommands(d), [
    { type: "M", x: 1, y: 0 },
    { type: "L", x: 69, y: 0 },
    { type: "Q", x1: 70, y1: 0, x: 70, y: 1 },
    { type: "C", x1: 1, y1: 2, x2: 3, y2: 4, x: 5, y: 6 },
    { type: "Z" },
  ]);
});
