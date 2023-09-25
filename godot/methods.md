---
layout: doc
aside: false
---

# Methods

| Methods                                              | Example                                           | Description                                                                                                                       |
| ---------------------------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Vector2(x: float, y: float)                          | Vector2(2.5, 5)                                   | position in 2D space                                                                                                              |
| apply_impulse(Vector2(x, y), ?:initial_values)       | apply_impulse(Vector2(2.5, 5))                    | exert initial force to the node once                                                                                              |
| _ready()                                             |                                                   | automatically executed when the game is launched                                                                                  |
| _process(delta)                                      |                                                   | processing called each frame (60 frames are executed per seconds)                                                                 |
| _physics_process(delta)                              |                                                   | Called during the physics processing step of the main loop. Physics processing means that the frame rate is synced to the physics |
| clampf(value: float, **min**: float, **max**: float) | clampf(10, 5, 15)                                 | returns a float not less than **min** and not more than **max**                                                                   |
| get_viewport_rect().size                             |                                                   | Gets the viewport (window) size                                                                                                   |
| global_position.clamp(min: Vector2, max: Vector2)    | global_position.clamp(Vector2(0, 0), screen_size) | Sets the min and max viewport (window) size of the player position                                                                |
| @export variable_name                                | @export var speed = 5                             | allow the variable to be edited in the interface                                                                                  |