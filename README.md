OnixJS - JavaScript Generators Enumerable Wrapper
===================================
[![Coverage Status](https://coveralls.io/repos/github/onixjs/enumerable/badge.svg?branch=master)](https://coveralls.io/github/onixjs/enumerable?branch=master) [![Build Status](https://travis-ci.org/onixjs/enumerable.svg?branch=master)](https://travis-ci.org/onixjs/enumerable)

The OnixJS Enumerable Class is a wrapper for JavaScript Generators in order to provide Array Like operations like, filter, map, reduce, etc.

The OnixJS Enumerable Class can be used either on TypeScript or ES6+ Projects.

# Installation

```sh
$ npm install --save @onixjs/enumerable
```
# Usage
The following are a set of examples of the operations available when wrapping a JavaScript Generator.

#### Map

```js
import { Enumerable } from '@onixjs/enumerable';

function* foo() {
  yield 'Hello';
}

const EnumerableFoo = new Enumerable(foo);
const result = <Enumerable> EnumerableFoo.map(value => `${value} World`);

console.log(result); // Expected Result: Hello World
```
#### Filter

```js
import { Enumerable } from '@onixjs/enumerable';

function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const EnumerableFoo = new Enumerable(foo);
const result = <Enumerable> EnumerableFoo.filter(value => value > 4);

console.log(result); // Expected Result: 5
```

# Contact
This module is written and maintained by Jonathan Casarrubias <t: johncasarrubias>