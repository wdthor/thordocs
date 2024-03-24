# Animating meshes

## Animating Meshes

- `clock.getElapsedTime()` is the difference between when this method was called and when it was first initialized
- `Math.sin(number)` is a wave signal that goes back and forth from for exemple -1 to 1

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

// render the scene
const renderLoop = () => {
  // calculating time
  // console.log(clock.getElapsedTime());
  const currentTime = clock.getElapsedTime();
  const deltaTime = currentTime - previousTime;
  previousTime = currentTime;

  cubeMesh.rotation.y += THREE.MathUtils.degToRad(1) * deltaTime * 20;

  // Some other animations
  // cubeMesh.position.z += -1 * deltaTime;
  // cubeMesh.scale.y += 1 * deltaTime;
  // cubeMesh.scale.setScalar(1 * currentTime);

  // cubeMesh.scale.x = Math.sin(currentTime) * 5 + 2;
  cubeMesh.position.x = Math.sin(currentTime) + 2;

  renderer.render(scene, camera);
  window.requestAnimationFrame(renderLoop);
};

renderLoop();
```

:::
