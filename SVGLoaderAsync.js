import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';

export class SVGLoaderAsync {
  async load(url) {
    return new Promise((resolve, reject) => {
      const loader = new SVGLoader();
      loader.load(url, resolve, null, reject);
    });
  }
  static createShapes(path) {
    return SVGLoader.createShapes(path);
  }
};
