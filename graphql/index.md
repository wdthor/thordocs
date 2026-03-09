# GraphQL

- Graph**QL** is a Query Language
- Alternative to using a REST API

## Differences with REST API

Rest Api endpoints :

- pokemonsite.com/api/pokemon
- pokemonsite.com/api/pokemon/123

### Downsides

- Over fetching : Getting back more data than we need
  - A request could get back more info than needed
- Under fetching : Getting back less data than we need
  - Multiple requests must be made in order to get the information we need
    - ex: get book info, get book_author info

### GraphQL approach

Single endpoint

- pokemonsite.com/api/pokemon

```js
// Exemple response
Query {
  course(id: "1") {
    id,
    title,
    thumbnail_url,
    author {
      name,
      id,
      courses {
        id,
        title,
        thumbnail_url
      }
    }
  }
}
```

## Schema Definition Language (SDL)

- A Schema is like a contract between the server and the client
- It defines what the Api can and cannot do, and how clients can request or change data

- A Schema is a collection of **object types** and **fields**
- Each field has a type that can be **scalar** (`Int`, `String`) or it can be another object type

```gql
"In graphQL it's a good practice to document schemas using quotes"
"""
Or triple quotes
for multiline description
"""
"fields are not separated by commas"
type SpaceCat {
  name: String! "'!' means non-nullable"
  age: Int
  missions: [Mission]
}
```

- The `Query` type's fields define which data clients can query from our schema

```gql
const gql = require("graphql-tag");

const typeDefs = gql`
    type Query {
        "Query to get tracks for the homepage grid"
        tracksForHome: [Track!]!
    }
    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        "The track's title"
        title: String!
        "The track's main author"
        author: Author!
        "The track's main illustration to display in track card or track page detail"
        thumbnail: String
        "The track's approximate length to complete, in minutes"
        length: Int
        "The number of modules this track contains"
        modulesCount: Int
    }
    "Author of a complete Track"
    type Author {
        id: ID!
        "Author's first and last name"
        name: String!
        "The author's profile picture url"
        photo: String
    }
}

`;

module.exports = typeDefs;
```

## Purpose of a GraphQL server

- Returning populated schema fields as a response
- Receiving incoming GraphQL queries
- Validating GraphQL queries against our schema

- Mocked data needs 2 packages

```sh
pnpm add @graphql-tools/mock @graphql-tools/schema
```

```graphql
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./schema";

const mocks = {
  "Generate 6 mocked data"
  Query: () => ({
    tracksForHome: () => [...new Array(6)],
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => {
      return {
        name: "Grumpy Cat",
        photo:
          "https://res.cloudinary.com/apollographql/image/upload/v1730818804/odyssey/lift-off-api/catstrophysicist_bqfh9n_j0amow.jpg",
      };
    },
    thumbnail: () =>
      "https://res.cloudinary.com/apollographql/image/upload/v1730818804/odyssey/lift-off-api/nebula_cat_djkt9r_nzifdj.jpg",
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks,
    }),
  });

  const { url } = await startStandaloneServer(server);

  console.log(`
        Server is running!
        Query at ${url}
    `);
}

startApolloServer();
```
