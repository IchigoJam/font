# IchigoJam font - IchigoJamフォント

- [IchigoJam font](https://ichigojam.github.io/font/IchigoJam_font-Regular.otf) (CC BY [IchigoJam](https://ichigojam.net/))
- [IchigoJam font dot](https://ichigojam.github.io/font/IchigoJam_font_dot-Regular.otf) (CC BY [IchigoJam](https://ichigojam.net/))
- [IchigoJam font round](https://ichigojam.github.io/font/IchigoJam_font_round-Regular.otf) (CC BY [IchigoJam](https://ichigojam.net/))

![image](https://github.com/IchigoJam/font/assets/1715217/f213d3f8-fa93-4f2c-bbcb-854eeba1a70c)

## How to make

```bash
deno run -A makeIchigoJamFont_round.js
deno run -A makeIchigoJamFont_dot.js
```

### png

```bash
deno run -A makePNG.js
```

### bin

```bash
deno run -A makeBIn.js
deno run -A https://code4fukui.github.io/bin2js/bin2js.js ichigojam-font.bin
```

## dependencies

- [opentype-es](https://github.com/code4fukui/opentype-es/)

## forked from

- [generate-font-deno.js - an example of opentype-es](https://github.com/code4fukui/opentype-es/blob/es/examples/generate-font-deno.js)
