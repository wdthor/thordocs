# Recipes

## Tween

### What is a Tween

- A **Tween** is an Object you can create in code to _animate_ and _sequence_ changes
- They are ideal for simple animations, and can animate properties, call functions, and wait

### Use a Tween

To use a Tween, you need to create it in code then provide it with a series of instructions to perform

```py
var tween = create_tween()
tween.tween_interval(1.0)
tween.tween_callback(get_tree().reload_current_scene)
```

## Particles

### What are particles ?

- Particles are a tool for creating complicated visual effects.
- Giving you the power to animate thousounds of meshes at the same time
- You can use particles to create fire, explosions, dust, sparks, and much more

### How to use particles ?

- Use a node called `GPUParcticles3D`
- We can make them stop and start emitting particles with their emitting property

## Accessing Nodes in unusual places

**Groups** are a quick and easy solution to get access to a Node regardless of its location in the `SceneTree`

```ts
@onready var target = get_tree().get_first_node_in_group("target")
```
