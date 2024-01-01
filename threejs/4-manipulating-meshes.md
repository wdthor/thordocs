# Manipulating meshes

## Transforming Position

[Mesh](https://threejs.org/docs/index.html?q=mesh#api/en/objects/Mesh)  
[Object3D](https://threejs.org/docs/index.html?q=mesh#api/en/core/Object3D)  
[Vector3](https://threejs.org/docs/index.html?q=mesh#api/en/math/Vector3)

- We can add axes helpers
  - y axis is green
  - x axis is red
  - z axis is blue

::: code-group

```js:line-numbers [main.js]

// initialize the scene
const scene = new THREE.Scene();

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);

cubeMesh.position.y = 1; // [!code ++]
cubeMesh.position.x = 1; // [!code ++]


// add axis helpers and set size
const axesHelper = new THREE.AxesHelper(2); // [!code ++]
scene.add(axesHelper); // [!code ++]

```

:::

## Vector3

- Vector3 is a class that allow us to manipulate the position, size, rotation etc... of an object

::: code-group

```js:line-numbers [main.js]

// initialize the scene
const scene = new THREE.Scene();

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);

// Copy position - Vector3 method
cubeMesh.position.copy(tempVector); // [!code ++]


/* initialize the perspective camera */
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  30
);

camera.position.z = 5;

// Calculate the distance between an object and the camera
console.log(cubeMesh.position.distanceTo(camera.position)); // [!code ++]


```

:::

## Transforming Scale

::: code-group

```js:line-numbers [main.js]

// initialize the scene
const scene = new THREE.Scene();

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);

// set cube's height * 2
cubeMesh.scale.y = 2; // [!code ++]

// set all 3 scale properties of the cube
cubeMesh.scale.set(2, 2, 2);

```

:::
