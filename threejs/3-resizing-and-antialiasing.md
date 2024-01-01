# Resizing and antialiasing

## Resizing

- We need to resize the Scene and camera each time the window is being resized

::: code-group

```js:line-numbers [main.js]

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  30
);
camera.position.z = 5;

const canvas = document.querySelector("canvas.threejs");

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(window.innerWidth, window.innerHeight);

// Resize camera and renderer on window resize
window.addEventListener("resize", () => { // [!code ++]
  camera.aspect = window.innerWidth / window.innerHeight; // [!code ++]
  // must be called after any change of params
  camera.updateProjectionMatrix(); // [!code ++]
  renderer.setSize(window.innerWidth, window.innerHeight); // [!code ++]
}); // [!code ++]

```

:::

## Antialiasing

- When we are drawing a shape, we are actually drawing in a grid which means there's some stair effect on the edges of the shape
- Antialiasing is filling the edges with a lighter color to give the illusion of smoothness

::: code-group

```js:line-numbers [main.js]

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true, // [!code ++]
});

renderer.setSize(window.innerWidth, window.innerHeight);

// set antialiasing
// 1 or 2
const maxPixelRatio = Math.min(window.devicePixelRatio, 2); // [!code ++]
renderer.setPixelRatio(maxPixelRatio); // [!code ++]

```

:::
