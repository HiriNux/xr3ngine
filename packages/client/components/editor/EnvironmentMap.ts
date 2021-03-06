// @ts-nocheck
import { CubeTextureLoader, RGBFormat } from "three";
import { RethrownError } from "@xr3ngine/engine/src/editor/functions/errors";
import negx from "../../public/cubemap/negx.jpg";
import negy from "../../public/cubemap/negy.jpg";
import negz from "../../public/cubemap/negz.jpg";
import posx from "../../public/cubemap/posx.jpg";
import posy from "../../public/cubemap/posy.jpg";
import posz from "../../public/cubemap/posz.jpg";
let cubeMapTexturePromise = null;
export let environmentMap = null;
export function loadEnvironmentMap() {
  if (cubeMapTexturePromise) {
    return cubeMapTexturePromise;
  }
  cubeMapTexturePromise = new Promise((resolve, reject) => {
    const cubeMapURLs = [posx, negx, posy, negy, posz, negz];
    cubeMapTexturePromise = new CubeTextureLoader().load(
      cubeMapURLs,
      texture => {
        texture.format = RGBFormat;
        environmentMap = texture;
        resolve(texture);
      },
      null,
      error =>
        reject(
          new RethrownError(
            `Error loading cubemap images ${cubeMapURLs
              .map(url => `"${url}"`)
              .join(", ")}`,
            error
          )
        )
    );
  });
  return cubeMapTexturePromise;
}
