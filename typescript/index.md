# Intermediate TS : Beyond the Basics

## for in - keyof typeof

::: code-group

```ts:line-numbers [iterator.ts]
const nums = {
  one: 1,
  two: 2,
  three: 3,
};
// We use keyof typeof to get "one", "two", "three" from nums
let property: keyof typeof nums; // let property: "one" | "two" | "three"

for (property in nums) {
  console.log(`${nums[property]}`); // 1, 2, 3
}
```

:::

## Maps

::: code-group

```ts:line-numbers [maps.ts]
// Map<key, value>
const testScores: Map<string, number> = new Map();
```

:::

- We can make it more readable by using an alias

::: code-group

```ts:line-numbers [maps.ts]
type Name = string;
type Score = number;
const testScores: Map<Name, Score> = new Map();
```

:::

- Some Map commands
  ::: code-group

```ts:line-numbers [maps.ts]
type Name = string;
type Score = number;
const testScores: Map<Name, Score> = new Map();

// Map.set()
testScores.set("Alice", 96);
testScores.set("Bob", 88);
testScores.set("Carol", 92);

// Map.delete()
testScores.delete("Carol");

// Map.clear()
testScores.clear();

// Iterating through Map
for (const [name, score] of testScores) {
  console.log(`${name} score is ${score}`);
}

for (const name of testScores.keys()) {
  console.log(name);
}

for (const score of testScores.values()) {
  console.log(score);
}

```

:::
