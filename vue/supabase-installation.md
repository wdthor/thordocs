# Supabase for Vue

1. Create an organization
2. Create a project
3. Install Supabase for JavaScript

```sh
pnpm add @supabase/supabase-js
```

4. Initialize a new Supabase client

```js:line-numbers [lib/supabaseClient.ts]
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
// createClient(ProjectUrl, ApiKey)
const supabase = createClient('<https://xyzcompany.supabase.co>', '<public-anon-key>')
// Use Env Variables
// const supabase = createClient('VITE_SUPABASE_URL', 'VITE_SUPABASE_KEY')


```

5. create a new table

## Setup Migration files

- Aside : Database Schema Migration Files helps us update and manage changes to our database directly from the app.
- They are like a way to keep our database in sync
- These files makes it easy to reset the entire dababase and recreate all the tables by just running the migration files

1. Install the Supabase CLI

```sh
pnpm add supabase --save-dev
```

2. Init Supabase

- add script to `package.json` and launch the command

```json
"supabase:init": "supabase init",
```

3. Login Supabase

- add script to `package.json` and launch the command

```json
"supabase:login": "supabase login",
```

4. Link project

- install `cross-env` to be able to use variables inside the `package.json` file
- Create the .env variable with the project reference ID
  - Supabase => Project Settings => Reference ID
- add script to `package.json` and launch the command

```json
"supabase:link": "cross-env <variable-name>=$<env-variable> supabase link --project-ref $<variable-name>",
"supabase:link": "cross-env PROJECT_REF=$VITE_SUPABASE_REF supabase link --project-ref $PROJECT_REF",
```

5. Create the Migration file

- add script to `package.json` and launch the command

```json
"db:migrate:new": "supabase migration new <schema-name>",
"db:migrate:new": "supabase migration new projects-schema",
```

- it creates a new **sql** file inside the `supabase/migrations` directory
- inside the `sql` file created, add the migration sql script

Ex:

```sql
drop table if exists projects;
drop type if exists current_status;

create type current_status as enum ('in-progress', 'completed');

create table
  projects (
    id bigint primary key generated always as identity not null,
    created_at timestamptz default now() not null,
    name text not null,
    slug text unique not null,
    status current_status default 'in-progress' not null,
    collaborators text array default array[]::varchar[] not null
  );
```

6. Reset the database

- add script to `package.json` and launch the command

```json
"db:reset": "supabase db reset --linked"
```

- it will reset the remote database, not the local one
