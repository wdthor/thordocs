# Express

## The REST Architecture

1. Seperate API into logical **resources**

- Resource : Object or representation of something, which has data associated to it. Any information that can be **named** can be a resource
  - tours
  - users
  - reviews

2. Expose structured, **resource-based URLs**
3. Use **HTTP methods** (verbs)
   CRUD

```sh
POST   /tours     # Create
GET    /tours/7   # Read
PUT    /tours/7   # Update
PATCH  /tours/7   # Update
DELETE /tours/7   # Delete
```

4. Send data as **JSON** (usually)
5. Be **stateless**

- Stateless RESTful API : All state is handled **on the client**.
- This means that each request must contain **all** the information necessary to process a certain request.
- The server should **not** have to remember previous requests

Ex. of state : `loggedIn`, `currentPage`

## Middleware

Functions that are executed between the Request/Response from the server to the client and vice versa

```js:line-numbers
app.use((req, res, next) => {
  // Content of the Middleware
});
```

> Reminder : Order matters in Express, so if a middleware is bellow a route, the middleware won't be executed on that route

## Router

- Allow us to set **base** route

```js:line-numbers
const userTour = express.Router();
app.use("/api/v1/users", tourRouter);

userRouter
  .route("/")
  .get(getAllUsers) // '/api/v1/users' + '/'
  .post(createUser);
```

## Param Middleware

- A middleware that runs on certain url' parameters (ex: only runs with routes containing `:id`)

```js:line-numbers
export const checkId = (req, res, next, val) => {
  // For non param middleware, "val" is not needed and should not be included in the params
  const tour = tours.find((el) => el.id === Number(val));
  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "invalid id",
    });
  }

  next();
};

const router = express.Router();
router.param("id", checkId);
```

## Morgan

- Morgan is middleware that logs HTTP requests.
- It's useful for monitoring incoming requests, debugging, and analyzing traffic patterns

### Why use Morgan ?

1. **Request Logging**: It captures details like HTTP method, URL, status code, response time, etc.
2. **Debugging** : Helps you see what requests are being made to your server.
3. **Performance** Monitoring: Can log response times to identify slow endpoints.
4. **Customizable**: You can define your own logging formats or use built-in ones.
5. **Supports Output Streams**: Logs can be written to files or sent to external logging services.

### Usage

```sh
pnpm add morgan
```

```js
import express from "express";
import morgan from "morgan";

const app = express();

// Use Morgan middleware with 'dev' format
app.use(morgan(<"dev" | "combined" | "common" | "short" | "tiny">));
```

## Env variables

- Env variables are set in `config.env`
- Install `dotenv`

```sh
pnpm add dotenv
```

### Use

```js
import dotenv from "dotenv";
```
