# Introduction & Setup

## Nodes & Scenes Primer

- Nodes are the building blocks of Godot
- A scene is a tree of nodes (a bunch of nodes grouped together)
- There are many different types of nodes, each with their own unique functionality
- Types of nodes examples
  - sprite2D
  - animation player
  - rigid body
- A Godot game is made out of scenes

## Instancing

- Instancing, let's use scenes in other scenes

## Parent children nodes relationship

- When a node is a child of another node, its parameters (position, size, scale, rotation, etc...) are relative to the parent node
- If we move the parent node, all children nodes will move with it

## Area2D

- Does not have collision resolution
- Can only detect other physics bodies and areas
- We use it to detect when 2 physics object collide without creating a collision between them

## CanvasLayer

- A canvas layer has a higher priority of a z-index order
  - Ex : A node in a canvas layer of 1 will be in front even though the z-index of the node is -100
- A canvas layer has a its own tranform properties, it doesn't get affected by the camera movement (getting a parallax effect)

## Don't view outside the camera view

Project => project settings => Stretch section => mode: canvas_items

## Understanding Delta time

- Delta time is the amount of time that has passed since the last frame
- Godot is set to have 60 frames per second
- But in a game, computers can run different frames per second (ex: 40, 70, or 100 frames per second)
- To get a consistent speed, we use the **Delta** time to set how many pixels per seconds we want to move

```py
var speed = 5
func _physics_process(delta):
  # How many pixels do we want to move each frame
	global_position.x += speed
  # How many pixels do we want to move in a second
	global_position.x += speed * delta
```

## Types of Physics Bodies

**CharacterBody2D** : A node where physics has to be controlled through code (useful for complex physics)

- more flexible but every calculation has to be done with the script

**RigidBody2D** : A node that handles physics automatically, no script needed (useful for simple physics)

- harder to use in scripts and to control but easier to use in the editor

**StaticBody2D** : A node intended for bodies that never move (walls, floors, etc...)

## Groups

- A group is like a tag we can add to any node
- We can use them to categorize our nodes
- We can access them in code with `get_tree().get_nodes_in_group("group_name")`

### Set groups

Project => project settings => Globals => Groups

### Add nodes to groups

- Select the node
- Right panel => Groups

### Access nodes in groups

```py
get_tree().get_nodes_in_group("group_name")

# use case
var collision: KinematicCollision2D = get_last_slide_collision()

	if collision:
		# Get the node the player collided with
		var collider_node: RigidBody2D = collision.get_collider()
		if collider_node.is_in_group('pushable'):
			var collision_normal: Vector2 = collision.get_normal()
			var push_force: Vector2 = collision_normal * push_strength
			collider_node.apply_central_force(-push_force)
```

## Audio & Sound

### Types of audio players

There are 2 types of audio players :

- AudioStreamPlayer
- AudioStreamPlayer2D

### AudioStreamPlayer

Plays audio directly into the sound output

### AudioStreamPlayer2D

Plays audio in one part of the world. The volume and direction of the audio depend on how far it is from the camera
