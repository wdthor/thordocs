# Rocket Boost

## Namespace

- **Namespaces** are "containers" for Classes
- **Classes** are "containers" for variables and methods

```md
- namespace
    - class
        - methods
        - variables
```

- We use Namespaces to encapsulate our code - *limit what the code can see / change / be changed by*
- The aim for a class is **to do one main thing**
  - Easier to read, fix issues, and have multiple peopple work on a project

### Classes we create
- We tend to use one class per script - better encapsulation and organisation
- Classes tend to be responsible for one thing (ex: Movement, CollisionHandler, Shooting, etc...)


## Simplest Input System
- We define Input Action bindings in the inspector
- Input Actions allow us to use multiple input systems (ex: keyboard, controller) to do specific things in our game

## Info About Imported Assets
- If we import an fbx model, we can drop it into our scene, scale it, rotate it, etc...
- However, we **can't alter** the original model file (ex: we can't "apply back to prefab")
- If we use one of these models from our scene to create a prefab, it will create a **Prefab Variant**
  - Changes made to one *Prefab Variant* instance will be applied to other instance, but **not** the original artwork

## Invoke
- Execute a method after a delay of *x* seconds

```cs
// delayInSeconds - float
Invoke("MethodName", delayInSeconds);
```

- **Pros** : Quick and easy to use
- **Cons** : Uses a *String reference*, not as performant as using a `Coroutine`


## Particles System Component
- **Particle System** is a Component added to a Game Object
- We use **Modules** for controlling behavior
- Each particle is **not a Game Object** 
