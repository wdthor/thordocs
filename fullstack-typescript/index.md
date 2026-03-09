# Fullstack TypeScript (feat. Zod)

## Zod

- A validation library built specifically for **TypeScript**'s type system
- It's design philosophy centers on **zero dependencies**, complete type inference, and immutable schemas

## Type Guard vs Schema Validation

Example with a task schema

```ts
import { z } from "zod";

const taskSchema = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});
```

Utility type :

- `z.infer<typeof taskSchema>` : Infer the type of the schema

```ts
type Task = z.infer<typeof taskSchema>;
```

Parsing :

- If the data is valid, it returns the parsed data
- If the data is invalid, it throws an error

```ts
const task = taskSchema.parse({
  id: 1,
  title: "Task 1",
  completed: false,
});
```

Safe parsing (safeParse doesn't throw):

- it will return an object with a `success` property and a `data` property
- If the data is valid, it returns the parsed data
- If the data is invalid, it returns a `error` property

```ts
const isTask = (task: unknown): task is Task => {
  return taskSchema.safeParse(task).success;
};
```

### Alterative to Zod

- Yup : validates instead of parsing
- io-ts : decodes instead of parsing
