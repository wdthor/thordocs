# Unity Tips

## Switching platforms

- When you switching platforms (e.g. from Windows to Android)
- Make sure it is the first thing you do
- Because the more assets you have, the more time it will take to recompile/reconfigure all the files
- The platform selected has the label `active`

## Prevent Unity from re-loading Domain and Scene each time with press **play**
- Edit => Project Settings => Editor => Enter Play Mode Settings - When entering Play Mode = *Do not reload Domain or Scene*


## Putting game assets inside an empty object
- Create an empty object
- Put the visual assets inside it
- Scripts are put inside the empty object
- The reason for doing this is that if we delete the visual asset, we don't loose all the mechanics/settings/scripts associated with it


## Assets and Colliders
- When importing an asset, we should immediately put a collider on it
- Because when we scale it or rotate it, the collider will follow the shape
- Not doing so can cause issues

### Mesh Colliders
- Since Mesh colliders have many faces, they are more ressource intensive (performance)
- If 2 objects have Mesh Colliders, `Convex` must be turned on (checked)