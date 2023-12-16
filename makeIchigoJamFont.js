import { Font, Glyph, Path } from "https://code4fukui.github.io/opentype-es/opentype.js";
import * as IchigoJamChar from "./IchigoJamChar.js";

export const SCALE = 110;

export const makeIchigoJamFont = async (fontName, funcMakePathFromFontData) => {
  const w = 8;

  // These are the global measurements of the typeface.
  const UNITS_PER_EM = w * SCALE;
  const ASCENDER = w * SCALE;
  const DESCENDER = -w; // -100;

  // We map between the character and the internal name.
  const TTF_NAME_MAP = { _: 'underscore', '.': 'period' };


  // The notdefGlyph always needs to be included.
  const notdefGlyph = new Glyph({
    name: '.notdef',
    advanceWidth: w * SCALE,
    path: new Path()
  });

  // Our glyph map can't properly encode a space character, so we make one here.
  const spaceGlyph = new Glyph({
    name: 'space',
    unicode: 32,
    advanceWidth: w * SCALE,
    path: new Path()
  });

  const glyphs = [notdefGlyph, spaceGlyph];

  // Loop through the glyph map and encode all glyphs.
  //const glyphNames = Object.keys(GLYPH_MAP);

  const fontdata = JSON.parse(await Deno.readTextFile("ichigojam-font.json"));

  for (let i = 0; i < fontdata.length; i++) {
    const glyphName = String.fromCharCode(i); // glyphNames[i]; // "a";
    // Do a conversion from the character name to the correct TrueType name.
    const ttfName = TTF_NAME_MAP[glyphName] || glyphName;

    const f = fontdata[i];

    const path = funcMakePathFromFontData(f);

    // Create the glyph. The advanceWidth is the widest part of the letter + 1.
    const chars = IchigoJamChar.getChars(glyphName.charCodeAt(0));
    for (const c of chars) {
      const glyph = new Glyph({
        name: ttfName,
        unicode: c.charCodeAt(0),
        advanceWidth: w * SCALE,
        path: path
      });
      glyphs.push(glyph);
    }
  }

  // Create the font using measurements + glyphs defined above.
  const font = new Font({
    familyName: fontName,
    styleName: 'Regular',
    unitsPerEm: UNITS_PER_EM,
    ascender: ASCENDER,
    descender: DESCENDER,
    glyphs: glyphs,
  });

  font.download();
};
