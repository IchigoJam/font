import * as t from "https://deno.land/std/testing/asserts.ts";
import * as IchigoJamChar from "./IchigoJamChar.js";

Deno.test("simple", () => {
  t.assertEquals(IchigoJamChar.getChars(0xb5), ["µ", "ｵ", "オ", "お"]);
  t.assertEquals(IchigoJamChar.getChars(32), [" ", "　"]);
  t.assertEquals(IchigoJamChar.getChars("A".charCodeAt(0)), ["A", "Ａ"]);
});
