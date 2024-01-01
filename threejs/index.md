# First Scene

- A threeJS world constitutes of 3 elements :
  - A Scene
  - A Camera
  - A Renderer

## ThreeJS Setup

1. Install ThreeJS

```bash:line-numbers
pnpm add three
```

2. import ThreeJS

::: code-group

```js:line-numbers [main.js]
import * as THREE from 'three'
```

:::

## Scenes

- A **scene** is made of **Groups** of **Meshes**
- A **mesh** is made of **Material** and **Geometry**
- So to create a mesh, we need to create a material and a geometry
- And meshes are added to the scene

## Create a new scene

::: code-group

```js:line-numbers [main.js]
import * as THREE from "three";

// initialize the scene
const scene = new THREE.Scene();

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "light-blue" });

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

scene.add(cubeMesh);
```

:::

Note: We can't see anything because the camera is not yet set and nothing has been rendered

## Add a camera

::: code-group

```js:line-numbers [main.js]
// initialize the scene
// add objects to the scene

// ...

// Initialize the camera

/**
 * new THREE.PerspectiveCamera(fieldOfView, aspectRatio, near, far)
 */
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  30
);
console.log(window.innerWidth, window.innerHeight);

// The mesh is created at the same position as the camera, so we need to move the camera
camera.position.z = 5;

// The camera is also an object so we could add it to the scene
// Use case : A camera view inside a car
// scene.add(camera);

```

:::

## Renderer

::: code-group

```js:line-numbers [main.js]
// initialize the scene
// add objects to the scene
// Initialize the camera
// Position the camera

// ...

// Initialize the renderer
const canvas = document.querySelector("canvas#threejs");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
```

```html:line-numbers [index.html]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World</title>
  </head>
  <body>
    <canvas id="threejs"></canvas> // [!code ++]
    <script type="module" src="/main.js"></script>
  </body>
</html>

```

:::
