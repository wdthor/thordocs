# Camera

## FOV

[Perspective Camera](https://threejs.org/docs/index.html?q=pers#api/en/cameras/PerspectiveCamera)

- Perspective Camera - This projection mode is designed to mimic the way the human eye sees. It is the most common projection mode used for rendering a 3D scene.
- `PerspectiveCamera(fov: number, aspect: number, near: number, far: number)`
- fov - Field of view, the angle that is capture by the camera lense or the extend of the environment visible to the player on the screen
- The smaller the FOV the less we see, but things are proportionnaly larger
  - `PerspectiveCamera(fov: 2, ...)`
- The bigger the FOV the more we see, but things are proportionnaly smaller
  - `PerspectiveCamera(fov: 70, ...)`

[FOV example](https://observablehq.com/@grantcuster/understanding-scale-and-the-three-js-perspective-camera)

## Near & Far

::: code-group

```js:line-numbers [main.js]
const camera = new THREE.PerspectiveCamera(
  75, // fov
  window.innerWidth / window.innerHeight, // aspect
  0.1, // near - shouldn't be higher than the camera.position.z (we won't see anything)
  30 // far - being able to see far is good but not too far - the GPU don't process it well
)
camera.position.z = 5
```

:::

## Orbit Controls

[Orbit Controls](https://threejs.org/docs/index.html?q=orbi#examples/en/controls/OrbitControls)
[Example](https://threejs.org/examples/#misc_controls_orbit)

- Orbit Controls allow the camera to orbit around a target
