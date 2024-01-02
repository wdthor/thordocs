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

// set all 3 scale properties of the cube (x, y, z)
cubeMesh.scale.set(2, 2, 2);

// set all 3 scale properties of the cube using 1 property (x, y, z)
cubeMesh.scale.setScalar(1.5)

```

:::

## Scene Hierarchy

[Group](https://threejs.org/docs/index.html?q=group#api/en/objects/Group)

- Meshes within a parent mesh (group), inherit their properties
- Properties changed from a child mesh are relative to the parent one (group)
- A group object is an empty objet that can contains other objects

  ::: code-group

```js:line-numbers [main.js]

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial); // [!code ++]
// Since the group's y position is at 2, cubeMesh's y position will be at 1 relative to the scene (parent of group)
cubeMesh1.position.y = -1; // [!code ++]

const cubeMesh2 = new THREE.Mesh(cubeGeometry, cubeMaterial); // [!code ++]
cubeMesh2.position.x = 2; // [!code ++]

const cubeMesh3 = new THREE.Mesh(cubeGeometry, cubeMaterial); // [!code ++]
cubeMesh3.position.x = -2; // [!code ++]

const group = new THREE.Group(); // [!code ++]
group.add(cubeMesh, cubeMesh2, cubeMesh3); // [!code ++]

// this will scale all 3 meshes
group.scale.setScalar(1.5); // [!code ++]

// all three meshes' y position will be at 2 relative to the scene
group.position.y = 2; // [!code ++]

scene.add(group); // [!code ++]

```

:::

## Rotation

[Object3D - rotation](https://threejs.org/docs/index.html?q=object#api/en/core/Object3D.rotation)  
[Euler](https://threejs.org/docs/index.html?q=object#api/en/math/Euler)
[Quaternion](https://threejs.org/docs/index.html?q=quaternion#api/en/math/Quaternion)

- Euler is a way to describe the rotation of an object depending on its various axes
- Euler( x : Float, y : Float, z : Float, order : String )
- When we edit an object rotation, ThreeJS will always apply changes in x, y, z order unless specified otherwise

- Quaternion is another way to describe the rotation of an object (more complex than Euler)
- It solves some issues we might encounter with Euler (ex: gimbal lock)

::: code-group

```js:line-numbers [main.js]

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: "red",
  wireframe: true,
});

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

scene.add(cubeMesh);

// rotate cubeMesh
// changing order from x, y, z to y, x, z
cubeMesh.rotation.reorder('YXZ'); // [!code ++]
cubeMesh.rotation.y = THREE.MathUtils.degToRad(90); // [!code ++]
cubeMesh.rotation.x = THREE.MathUtils.degToRad(45); // [!code ++]


// add axis helpers to cubeMesh and set helper's size
const axesHelper = new THREE.AxesHelper(2);
cubeMesh.add(axesHelper); // [!code ++]

```

:::
