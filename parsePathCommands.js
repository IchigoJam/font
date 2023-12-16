
// https://github.com/code4fukui/opentype-es/blob/es/src/path.js
/*
this.commands.push({
    type: 'M',
    x: x,
    y: y
});
*/
const makeCommand = (cmd, num) => {
  const o = { type: cmd };
  if (num.length == 2) {
    o.x = num[0];
    o.y = num[1];
  } else if (num.length == 4) {
    o.x1 = num[0];
    o.y1 = num[1];
    o.x = num[2];
    o.y = num[3];
  } else if (num.length == 6) {
    o.x1 = num[0];
    o.y1 = num[1];
    o.x2 = num[2];
    o.y2 = num[3];
    o.x = num[4];
    o.y = num[5];
  }
  return o;
};

export const parsePathCommands = (d) => {
  const ncmdmap = {
    L: 1,
    M: 1,
    Q: 2,
    C: 3,
    Z: 0,
  };

  const res = [];
  let st = 0;
  let cmd = null;
  let ncmd = null;
  let num = [];
  for (let i = 0; i < d.length; i++) {
    const c = d[i];
    if (st == 0) {
      cmd = c;
      if (c != " ") {
        ncmd = ncmdmap[cmd];
        if (ncmd == 0) {
          res.push(makeCommand(cmd, num));
        } else {
          st = 1;
        }
      }
    } else if (st == 1) {
      const x = parseFloat(d.substring(i));
      i += ("" + x).length - 1;
      num.push(x);
      st = 2;
    } else if (st == 2) {
      if (c != ",") {
        throw new Error("not comma");
      }
      st = 3;
    } else if (st == 3) {
      const y = parseFloat(d.substring(i));
      i += ("" + y).length - 1;
      num.push(y);
      ncmd--;
      if (ncmd) {
        st = 4;
      } else {
        res.push(makeCommand(cmd, num));
        num.length = 0;
        st = 0;
      }
    } else if (st == 4) {
      if (c != " ") {
        throw new Error("not space");
      }
      st = 1;
    }
  }
  return res;
};
