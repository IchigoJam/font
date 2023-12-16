import kana from "https://ichigojam.github.io/web/kana.mjs";
import { HankakuKana } from "https://code4fukui.github.io/mojikiban/HankakuKana.js";
import { kata2hira} from "https://code4fukui.github.io/mojikiban/Kana.js";
import { ZenkakuAlpha } from "https://code4fukui.github.io/mojikiban/ZenkakuAlpha.js";

export const getChars = (code) => {
  const set = new Set();
  const c = String.fromCodePoint(code);
  const zen = ZenkakuAlpha.toZen(c);
  const hankana = String.fromCodePoint(kana.fromHankaku(code));
  const zenkana = HankakuKana.toZen(hankana);
  const zenhira = kata2hira(zenkana);
  set.add(c);
  set.add(zen);
  set.add(hankana);
  set.add(zenkana);
  set.add(zenhira);
  return Array.from(set);
};
