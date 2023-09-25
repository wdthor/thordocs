# Speedy Saucer

I. Project Setup

::: details 1. Create a 2D game object (Node2D)
  - `ctrl + a` ==> search *node2D*
  - rename the node ==> `F2` => *level1*
:::

::: details 2. Create a texture for the background (TextureRect)
  - `ctrl + a` ==> search *TextureRect*
  - rename the node ==> `F2` => *background*

  - right panel : stretch mode ==> *tile* 
:::

II. Nodes & Scenes

::: details 1. Create a new player (RigidBody2D + Sprite2D)
  - `ctrl + a` ==> search *RigidBody2d*
  - rename the node ==> `F2` => *player*

  - `ctrl + a` ==> search *Sprite2D*
  - add player texture/image
:::

III. Instancing scenes

::: details 1. Instancing a scene
  - First, make sure the root node is selected in the level scene
  - `ctrl + shift + a` ==> select the player scene => open
  - The player scene is now in the level scene
:::

IV. Getting input

::: details 1. Add input map
  - First, make sure the root node is selected in the level scene
  - Go to Project ==> Project Settings... => Input Map tab => Add New Action : set an action name
  - Click on the **+** icon => use the keyboard to listen
:::

::: details 2. Listen to event in the player script
  - Write code inside the `_physics_process(delta)`
  ```py
  var force = 500
  func _physics_process(delta):
    if(Input.is_action_pressed("move_up")):
      apply_force(Vector2(0, -force))
    if(Input.is_action_pressed("move_down")):
      apply_force(Vector2(0, force))
    if(Input.is_action_pressed("move_left")):
      apply_force(Vector2(-force, 0))
    if(Input.is_action_pressed("move_right")):
      apply_force(Vector2(force, 0))
  ```
:::

V. Following the player with Camera2D

::: details 1. Add a camera2D
  - First, make sure the root node is selected in the level scene
  - `ctrl + a` ==> search *Camera2D*
  - select the camera's smoothing needed
    - 1. check the `Position Smoothing`
    - 2. open the **Drag** section in the right panel, check the Horizontal & Vertical Enabled options
:::

VI. Making the maze

::: details 1. Add a new scene as Area2D
  - 2. Add a CollisionPolygon2D
  - 3. Create a maze with points
  - 4. Save as `maze`
:::

::: details 2. Add maze to level_1 scene
  - `ctrl + shift + a` ==> add `maze`
:::

::: details 3. Add a Polygon2D
  - 2. Get the CollisionPolygon2D data ==> Polygon => copy value
  - 3. Go to the Polygon2D data ==> Polygon => paste value
  - 4. Apply the dark purple image in the Polygon2D texture
  - 5. Set the repeat option to `Enabled`
:::

VII. Using signals to reset the game

::: details 1. Select the maze
  - 1. In the right panel select the `node` tab ==> Signals => body_exited => Connect... => select the level1 node
  - It will generate an _on_maze_body_existed(body) script
  - 2. In the script use this to reload the game

  ```py
  func _on_maze_body_exited(body):
	  get_tree().reload_current_scene()
  ```
:::

VIII. Parallax background & text labels

::: details 1. Add a CanvasLayer
  - 2. Set the CanvasLayer as a parent of `background`
  - 3. Set the layer property at -10
  - 4. Set the `background` to Full Rect
:::

::: details 2. Add Labels
  - 1. add a label node
  - 2. set the text
  - 3. go to Label Settings ==> New LabelSetting to set the label style
:::