# Martian Mike

I. Project Setup

::: details 1. Change the default filter texture of small images
- project ==> Textures => Canvas Textures => Default Texture Filter => **Nearest**
:::

::: details 2. Lower window size
- Project Settings ==> Display => Window => Size => edit the Viewport Width & Height (We can use division like native-screen-resolution / 4)
:::

::: details 3. Increase canvas size
- Project Settings ==> Display => Window => Stretch => Mode : canvas_items
:::

::: details 4. Override small window display when starting the game
- Project Settings ==> Turn on the Advanced Settings on the top right of the screen => Display => Window => Size => set Window Width & Height Override to : Low window size previously set * 3
:::

::: details 5. Set input actions
- Set player actions ==> left, right and jump actions
- Set game actions ==> quit : **Escape** key, reset ==> **R**
:::

::: details 6. Set script for reset and quit
```js
func _process(delta):
	if Input.is_action_just_pressed("quit"):
		get_tree().quit()
	elif Input.is_action_just_pressed("reset"):
		get_tree().reload_current_scene()

```
:::

II. Animated sprites

::: details 1. Fix blurry sprites (globally)
- Project Settings ==> General => Rendering => Textures => Canvas Textures => Default Texture Filter : **Nearest**
:::

::: details 2. Lower window size
- Caveat : Text font can be hard to work with
- Project Settings ==> Display => Window => Size => edit the Viewport Width & Height (We can use division like native-screen-resolution / 4)
:::

::: details 3. Increase canvas size
- Project Settings ==> Display => Window => Stretch => Mode : canvas_items
:::

::: details 4. Override small window display when starting the game
- Project Settings ==> Turn on the Advanced Settings on the top right of the screen => Display => Window => Size => set Window Width & Height Override to : Low window size previously set * 3
:::

::: details 5. Create a new scene
- Add a character body 2D, as child a CollisionShape2D, AnimatedSprited2D
:::

::: details 6. Add frames from sprite sheet
- Select the AnimatedSprited2D : right panel ==> Animation => Sprite Frames : **New SpriteFrames**
- In the bottom panel ==> rename `default` animation => `crtl + shift + o` for a sprite sheet or `crtl + o` for a single sprite
- Select the sprite sheet
- Change settings to get the result wanted
- Select all frames => Add x frame(s)
- Set frame rates in the bottom panel (ex : 20 frames)
- Activate "Autoplay on Load"
- Set the CollisionShape2D node to the size of the sprite
:::

III. Player Movement

- Add a camera2D in the Player scene
- Add the Player in the Level scene

::: details 2. Set the gravity, movement and jump
- Add a script for the Player
```py
# player.gd
@export var gravity = 400
@export var jump_force = 200
@export var speed = 125

@onready var animated_sprite = $AnimatedSprite2D

func _physics_process(delta):
	if !is_on_floor():
		velocity.y += gravity * delta
  #		Prevents increasing the velocity more
		if velocity.y > 500:
			velocity.y = 500
		
	if Input.is_action_just_pressed("jump"):
		velocity.y += -jump_force

#	Input.get_axis will return -1 if move_left, 1 if move_right, 0 if none or both of them
	var direction = Input.get_axis("move_left", "move_right")
	velocity.x = direction * speed
	move_and_slide()
```
:::

IV. Boolean operator
- Update the jumping condition

::: details 1. Prevent the player from jumping when not on the floor
```js
# player.gd
if Input.is_action_just_pressed("jump") && is_on_floor():
		velocity.y += -jump_force
```
:::

V. Updating animations

::: details 1. Flip the sprite from right to left
```py
# player.gd

# Input.get_axis will return -1 if move_left, 1 if move_right, 0 if none or both of them
	var direction = Input.get_axis("move_left", "move_right")
#	Flip the sprite left if direction == -1 or flip right
#	If no key is pressed, direction = 0
	if direction != 0:
		animated_sprite.flip_h = direction == -1
```
:::

::: details 2. Update animation sprites
```js
# // player.gd

func update_animations(direction):
	if is_on_floor():
		if direction == 0:
			animated_sprite.play("idle")
		else:
			animated_sprite.play("run")
	else:
		if velocity.y < 0:
			animated_sprite.play("jump")
		else:
			animated_sprite.play("fall")
```
- call the function
```js
# // player.gd

velocity.x = direction * speed
move_and_slide()
	
update_animations(direction)
```
:::

V. Deathzone

::: details 1. In the Level scene, create the deathzone area
- `ctrl + a` ==> **Area2D**
- Add a **CollisionShape2D**
- Set the deathzone
- Add a **body_entered** signal
- Add a script to the Level scene
:::


::: details 2. Create a Marker2D
- Add a `Marker2D` as child of `Level`
- Rename `StartPosition`
- Set its position
:::

::: details 3. Edit script
```js
# // Level.gd
@onready var start_position = $StartPosition

func _on_deathzone_body_entered(body):
	reset_position(body)
	
func reset_position(body):
	body.velocity = Vector2.ZERO
	body.global_position = start_position.global_position
```
:::

::: details 4. Set camera limit
- In the Player scene, select the camera
- Set its bottom limit : right panel ==> Limit => Bottom: **set pixel** (ex: 208px)
:::

VI. Jump Pad
::: details 1. Add a jump pad scene

- Add a `Area2D` as root
- Add `AnimatedSprite2D` and `CollisionShape2D` as children
- Add sprite frames for `idle` and `jump` animations
- Set Collision layers
- Add a script
- Add `on_body_entered` signal
:::

::: details 2. Add a script
```js
# // jump_pad.gd
extends Area2D

@onready var animated_sprite = $AnimatedSprite2D

@export var jump_force = 300

func _on_body_entered(body):
# // Player is the name given in class_name in the player.gd
	if body is Player:
		animated_sprite.play("jump")
		body.jump(jump_force)

```
:::

::: details 3. Update player script
```js
# // player.gd
extends Area2D
class_name Player # // name given to player

# ...
if Input.is_action_just_pressed("jump") && is_on_floor():
		jump(jump_force)

# ...

func jump(force):
	velocity.y = -force

```

:::