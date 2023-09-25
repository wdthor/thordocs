# Tips

## I. Working with low resolution (small) sprites (32x32)

- Step1 : Fix blurry sprites
::: details Solution 1. Fix blurry sprites (one by one)
- Import the sprite and select it
- Right panel ==> CanvasItem => Texture => Filter: **Nearest**
:::

::: details Solution 2 - Fix blurry sprites (globally)
- Project Settings ==> General => Rendering => Textures => Canvas Textures => Default Texture Filter : **Nearest**
:::

- Step2 : Fix small display
::: details 1. Solution 1. Increase sprites scaling
- Caveat : Each sprites must increase their scaling one by one
:::

::: details 1. Solution 2. Lower window size
- Caveat : Text font can be hard to work with
- Project Settings ==> Display => Window => Size => edit the Viewport Width & Height (We can use division like native-screen-resolution / 4)
:::

::: details 2. Increase canvas size
- Project Settings ==> Display => Window => Stretch => Mode : canvas_items
:::

::: details 3. Override small window display when starting the game
- Project Settings ==> Turn on the Advanced Settings on the top right of the screen => Display => Window => Size => set Window Width & Height Override to : Low window size previously set * 3
:::

## II. Working with sprites sheet

::: details 1. Create a new scene
- Add a character body 2D, as child a CollisionShape2D, AnimatedSprited2D
:::

::: details 2. Add frames from sprite sheet
- Select the AnimatedSprited2D : right panel ==> Animation => Sprite Frames : **New SpriteFrames**
- In the bottom panel ==> rename `default` animation => `crtl + shift + o` for a sprite sheet or `crtl + o` for a single sprite
- Select the sprite sheet
- Change settings to get the result wanted
- Select all frames => Add x frame(s)
- Set frame rates in the bottom panel (ex : 20 frames)
- Activate "Autoplay on Load"
- Set the CollisionShape2D node to the size of the sprite
:::
