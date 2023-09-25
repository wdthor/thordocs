# Alien Attack

I. Project Setup & Player Scene

::: details 1. Create a 2D game object (Node2D)
  - `ctrl + a` ==> search *node2D*
  - rename the node ==> `F2` => *Game*
:::

::: details 2. Set the window size
  - project ==> Project Settings => Window => **1280x720**
  - Stretch => Mode => canvas_items
:::

::: details 3. Add the background
  - ctrl + a` ==> search *TextureRect*
  - rename the node ==> `F2` => *background*

  - right panel : stretch mode ==> *tile* 
:::

::: details 4. Create a new player (CharacterBody2D + Sprite2D)
  - `ctrl + a` ==> search *CharacterBody2D*
  - rename the node ==> `F2` => *player*

  - `ctrl + a` ==> search *Sprite2D*
  - add player texture/image
  - add player script
:::

::: details 5. Instance the player to the scene
  - First, make sure the root node is selected in the level scene
  - `ctrl + shift + a` ==> select the player scene => open
:::

II. Player Movement

::: details 1. Set the motion mode
  Since the Player is a floating
  - Select the player (`CharacterBody2D`)
  - right panel ==> Motion Mode => Floating
:::

::: details 2. Listen to event in the player script
  - Write code inside the `_physics_process(delta)`
  ```py
  var speed = 500
  func _physics_process(delta):
    velocity = Vector2(0, 0)
    if Input.is_action_pressed("move_up"):
      velocity.y = -speed
    if Input.is_action_pressed("mouve_down"):
      velocity.y = speed
    if Input.is_action_pressed("move_left"):
      velocity.x = -speed
    if Input.is_action_pressed("move_right"):
      velocity.x = speed
    move_and_slide()
  ```
  - `move_and_slide()` & `velocity` works together
  - We need to se the velocity back to 0 or it will continue to move (`velocity = Vector2(0, 0)`)
:::

III. Clamping player's position

::: details 1. Restrict the player in the screen view
```py
  # === 1st method ===
	if global_position.x < 0:
		global_position.x = 0
	if global_position.x > 1280:
		global_position.x = 1280
	if global_position.y < 0:
		global_position.y = 0
	if global_position.y > 720:
		global_position.y = 720

	# global_position gets the player current x, y positions
  # get_viewport_rect().size gets the viewport (window) size

  #	=== 2nd method ===
	var screen_size = get_viewport_rect().size
	global_position.x = clampf(global_position.x, 0, screen_size.x)
	global_position.y = clampf(global_position.y, 0, screen_size.y)

  #	=== 3rd method ===
  # Sets the min and max viewport (window) size of the player position
	var screen_size = get_viewport_rect().size
	global_position = global_position.clamp(Vector2(0, 0), screen_size)
```
:::

IV. Rocket Scene & Movement

Note : Why create an Area2D for the rocket ?
- We want to detect when a rocket hits an enemy
- But we don't want to have any physics collision happening
- Area2D allows to detect when a rocket get's into contact with an enemy

::: details 1. Create a new scene (Area2D) and a rocket sprite
  - `ctrl + a` ==> search *Area2D*
  - rename the node ==> `F2` => *Rocket*
  - add a Sprite2D for the rocket
  - add a CollisionShape2D with a capsule shape
  - add a rocket script with the following code

```js
@export var speed = 5

func _physics_process(delta):
	global_position.x += speed
```
  - add the rocket to the game scene
:::

V. Understanding Delta time
- Delta time is the amount of time that has passed since the last frame

::: details 1. Edit speed to use Delta
```py
func _physics_process(delta):
	global_position.x += speed * delta
```
:::

VI. Shooting Rockets

::: details 1. Add Input Map for shooting rockets
  - Project ==> Project Settings... => Input Map tab => Add New Action
:::

::: details 2. Preload the rocket scene
```py
# Player.gd
var rocket_scene = preload("res://scenes/rocket.tscn")
```
:::

::: details 3. Create shoot function
```py
# Player.gd
func shoot():
	var rocket_instance = rocket_scene.instantiate()
	add_child(rocket_instance)
	rocket_instance.global_position.x += 80
```
:::

::: details 4. Call the shoot function in the _process function on input shoot
```py
# Player.gd
func _process(delta):
	if Input.is_action_just_pressed("shoot"):
		shoot()
```
:::

VII. Creating References to nodes

::: details 1. Create a Node in the Player scene
  - `ctrl + a` ==> search *Node*
  - rename the node ==> `F2` => *RocketContainer*
:::

::: details 2. Get the RocketContainer in player.gd
```js
# Player.gd
# @onready is a shortcut for _ready() function
# $RocketContainer is a shortcut for get_node("RocketContainer")

@onready var rocket_container = $RocketContainer
```
:::

::: details 3. Instantiate a rocket from the RocketContainer instead of the Player node
```py
# Player.gd
  var rocket_instance = rocket_scene.instantiate()
#	instantiate a rocket at the RocketContainer's position
	rocket_container.add_child(rocket_instance)
#	set the rocket position to the Player position
	rocket_instance.global_position = global_position
	rocket_instance.global_position.x += 80
```
:::

VIII. Deleting unwanted rockets
::: details 1. Create a VisibleOnScreenNotifier2D
  - `ctrl + a` ==> search *VisibleOnScreenNotifier2D*
  - rename the node ==> `F2` => *VisibleNotifier*
  - place the VisibleNotifier on the left part of the rocket
:::

::: details 2. Remove the rocket on sceen exited

- Add a reference to the *VisibleNotifier*
```java
@onready var visible_notifier = $VisibleNotifier
```
- Add this code to clear the rocket
```py
func _on_screen_exited():
	queue_free()
```
  - In the _ready() function, add this code to connect the visible_notifier to the screen_exited to remove the rocket
```py
func _ready():
	visible_notifier.connect('screen_exited', _on_screen_exited)
```
:::

IX. Enemy Spawner Scene

::: details 1. Create a new **Node2D** scene
- Rename the scene as **EnemySpawner** and add a its script
- Create another **Node2D** node as **EnemySpawner** child
- Rename the scene as **SpawnPosition**
- Create 6 **Marker2D** nodes as children of **SpawnPosition** for the enemies to appear, the distance between them must be equally apart
:::

::: details 2. Add a Timer node as EnemySpawner child

- Set a signal to Timer **_on_timer_timeout()** and connect it to the **EnemySpawner** node
- The **EnemySpawner** script should be like this
```py
func _on_timer_timeout():
	print("Timeout")
```
:::

X. Spawn Enemy Function
- Spawning an enemy is similar to spawning rockets
  
::: details 1. Preload the enemy scene and get the SpawnPositions reference
```java
  var enemy_scene = preload("res://scenes/enemy.tscn")
  @onready var spawn_positions = $SpawnPositions  
```
:::

::: details 2. Add a function to spawn enemies at random positions
```py
  var spawn_position_list = spawn_positions.get_children()
	var random_spawn_position = spawn_position_list.pick_random()
	
	var enemy_instance = enemy_scene.instantiate()
	enemy_instance.global_position = random_spawn_position.global_position
	add_child(enemy_instance)
```
:::

XI. Shooting Enemies & Collision Layers
- Spawning an enemy is similar to spawning rockets
  
::: details 1. In the rocket scene, add a Signal to detect an enemy which is an **Area2D**
- In the Node tab of the right panel, select the `area_entered` signal
:::


::: details 2. Clear the rocket and the enemy _on_area_entered()
```py
# rocket.gd
func _on_area_entered(area):
#	clears the rocket
	queue_free()
#	call the die function from the enemy script
	area.die()

# enemy.gd
func die():
	queue_free()
```
:::

::: details 3. Set layers to prevent bugs
- Project ==> Project Settings => General
- Layer 1 => player
- Layer 2 => enemy
- Layer 3 => rocket

Set the Collision Layer
- player => Layer 1 | Mask 2
- enemy => Layer 2 | Mask 1, 3
- rocket => Layer 3 | Mask 2
:::

XII. Enemy Deathzone
::: details 1. In the Game scene, create the deathzone area
  - `ctrl + a` ==> **Area2D**
  - add a **CollisionShape2D**
  - set the deathzone
  - add a **area_entered** signal
  - Add a script to the Game scene

```py
func _deathzone_area_entered(area):
	area.die()
```

- Add the deathzone layer to detect the rocket
:::

XIII. Lives & Custom Signals
::: details 1. Add a body_entered signal to the enemy
```py
# enemy.gd
func _on_body_entered(body):
#	The player takes damage
	body.take_damage()
#	The enemy dies
	die()
```
:::

::: details 2. Add `lives` variable to the game script and create a custom signals to the player script
```py
# game.gd
var lives = 3
```

- Create a custom signal to the player script and emit the signal in the `take_damage` function
```py
# player.gd
# Custom signal
signal took_damage

func take_damage():
# game node will receive the took_damage signal
	emit_signal("took_damage")
```
:::

::: details 3. Use the custom signal "took_damage" in the player reference of the game scene and remove player lives
- Game ==> Player => took_damage()
```py
# game.gd
func _on_player_took_damage():
	lives -= 1
	if lives == 0:
		player.die()
  else:
    print(lives)
```
:::

XIV. Scoring & Enemy Died Signal
::: details 1. Create a custom signal "`died`" in enemy.gd and emit the signal in the `die()` function
```py
# enemy.gd
signal died

func die():
	emit_signal("died")
	queue_free()
```
:::

::: details 2. Create a custom signal "`enemy_spawned`" with the `enemy_instance` in enemy_spawner.gd and emit the signal in the `spawn_enemy()` function
```py
# enemy_spawner.gd
signal enemy_spawned(enemy_instance)

func spawn_enemy():
	...
	emit_signal("enemy_spawned", enemy_instance)
  #	add_child(enemy_instance)
```
:::

::: details 3. In the game scene, connect the `died` signal from the enemy instance and create a `_on_enemy_died` function
- Connect the signal in the `EnemySpawner` instance
Signal ==> enemy_spawned(enemy_instance)
- Add the script
- 
```py
# game.gd

var score = 0
func _on_enemy_spawner_enemy_spawned(enemy_instance):
	enemy_instance.connect("died", _on_enemy_died)
	add_child(enemy_instance)

func _on_enemy_died():
	score += 100
	print("Score : " + str(score))
```
:::

XV. Score UI
::: details 1. Create a new scene `User Interface` and label
- In the UI scene create a label node and name it Score
- Set the text, size and font
:::

::: details 2. Add a script to update the score  `User Interface` and label
- In the UI scene create a label node and name it Score
- Set the text, size and font

```java
# hud.gd
@onready var score = $Score

func set_score_label(new_score):
	score.text = "SCORE : " + str(new_score)
```
:::

::: details 3. In game.gd, create a reference to HUD, set the initial score and update the `_on_enemy_died` function

```js
var score = 0
@onready var hud = $UI/HUD

func _ready():
	hud.set_score_label(score)

func _on_enemy_died():
	score += 100
	hud.set_score_label(score)
```
:::

XVI. Lives UI
- The lives UI is similar to the score UI except there is `TextureRect` used for adding an image

XVII. Game Over Screen

::: details 1. Create a new scene `User Interface` as GameOverScreen
- Add a **Panel** to the GameOverScreen node
- Add a GameOver, Score Labels and a button to the **Panel** node
:::

::: details 2. Add a script to the GameOverScreen and a **pressed** signal ot the button
- Add a GameOver, Score Labels and a button to the **Panel** node
- In the script

```py
game_over_screen.gd
func set_score(new_score):
	$Panel/Score.text = "SCORE : " + str(new_score)

func _on_retry_button_pressed():
	get_tree().reload_current_scene()
```
:::

::: details 3. In game.gd, preload the gameover screen and instantiate it when the player dies
- Add a GameOver, Score Labels and a button to the **Panel** node
- In the script

```js
var game_over_screen = preload("res://scenes/game_over_screen.tscn")
@onready var ui = $UI

func _on_player_took_damage():
	  ...
		
#		Wait 1.5s before displaying the game over screen
		await get_tree().create_timer(1.5).timeout
		
		var game_over_screen_instance = game_over_screen.instantiate()
		game_over_screen_instance.set_score(score)
		ui.add_child(game_over_screen_instance)
```
:::

XVIII. Adding Sound Effect
::: details 1. Add a **AudioStreamPlayer** node to the game scene
- Select the sound
- Place the sound in the place desired
```java
@onready var enemy_hit_sound = $EnemyHitSound
enemy_hit_sound.play()
```
:::

XIX. Flame Particle Effect
- Watch the lecture
