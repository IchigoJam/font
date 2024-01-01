import { THREE } from "https://code4fukui.github.io/egxr.js/egxr.js";
import { SVGLoaderAsync } from "./SVGLoaderAsync.js";
import { ijfont2svg } from "./ijfont2svg.js";
import { makeDataSVG } from "./makeDataSVG.js";

export const createMeshIJFont = async (s, material) => {
  const svg = ijfont2svg(s, 10);
  const url2 = makeDataSVG(svg);

  if (!material) {
    material = new THREE.MeshBasicMaterial({ color: "#000000" });
  }

  const extrudeSettings = {
    steps: 2,
    depth: 10,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: .1,
    bevelOffset: 0,
    bevelSegments: 1,
  };

  const data = await new SVGLoaderAsync().load(url2);
  const paths = data.paths;
  const group = new THREE.Group();
  for (const path of paths) {
    const shapes = SVGLoaderAsync.createShapes(path);
    for (const shape of shapes) {
      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      const mesh = new THREE.Mesh(geometry, material);
      group.add(mesh);
    }
  }
  return group;
};
