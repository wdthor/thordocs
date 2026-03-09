# Node

- Node is a **JavaScript runtime** built on Google's open-source **V8 JavaScript Engine**

## Pros

- Single threaded
- Based on Event Driven
- Non-blocking I/O model
- Perfect for building **fast** and **scalable data intensive** apps

## Use

- API with database behind it (preferably NoSQL)
- Data streaming (ex: Youtube)
- Real-time chat application
- Server side web application

## Don't use

- Applications with heavy server side processing (CPU intensive)

## Guidelines for not blocking the event loop in Node

- Don't use **sync** versions of functions in `fs`, `crypto` and `zlib` modules in callback functions
- Don't perform complex calculations (ex: loop inside loops)
- Be careful with `JSON` in large objects
- Don't use too complex regular expressions (ex: nested quantifiers)

## Streams

> Used to process (read and write) data piece by piece (chunks), without completing the whole read or write operation, and therefore without keeping all the data in memory

- Perfect for handling large volumes of data, for example videos;
- More efficient data processing in terms of memory (no need to keep all data in memory) and time (we don't have to wait all the data is available)

### Readable Streams

- Streams from which we can read (consume) data. Ex:
  - http requests
  - fs read streams
- Important events
  - data
  - end
- Important functions
  - pipe()
  - read()

### Writable Streams

- Streams to which we can write data. Ex:
  - http responses
  - fs write streams
- Important events
  - drain
  - finish
- Important functions
  - write()
  - end()

### Duplex Streams

- Streams that are both readable and writable (less common). Ex:
  - net web socket

### Transform Streams

- Duplex streams that transform data as it is written or read. Ex:
  - zlib Gzip creation

## What Happens when we **require** a module ?

### Resolving & Loading

1. Starts with **Core modules** - `require('http')`;
2. If begins with `./` or `../` : Try to **load developer modules** - `./lib/controller`
3. If no file found : Try to **find folder** with `index.js` in it
4. Go to **node_modules/** and try to find module there - `require('express')`

### Wrapping

When the module is loaded, it is wrapped into a "self-called" function

```js:line-numbers
(function (exports, require, module, __filename, __dirname) {
  // Module code live here...
});
```

- exports: a reference to `module.exports`, used to export object from a module
- require: function to require modules
- module: a reference to the current module
- \_\_filename: absolute path of the current module's file
- \_\_dirname: directory name of the current module

### Execution

### Returning Exports

- require function returns `exports` of the required module
- `module.exports` is the returned object
- Use `module.exports` to export one single variable, ex: one class or one function (`module.exports = Calculator`)
- Use `exports` to export multiple named variables (`exports.add = (a, b => a + b)`)
- This is how we import data from one module into another

### Caching

## API

Application Programming Interface : a piece of software that can be used by another piece of software, in order to allow applications to talk to each other.
