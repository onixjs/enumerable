OnixJS - Enumerable Wrapper for JavaScript Generators
===================================
[![Coverage Status](https://coveralls.io/repos/github/onixjs/enumerable/badge.svg?branch=master)](https://coveralls.io/github/onixjs/enumerable?branch=master) [![Build Status](https://travis-ci.org/onixjs/enumerable.svg?branch=master)](https://travis-ci.org/onixjs/enumerable) [![npm (scoped)](https://img.shields.io/npm/v/@onixjs/enumerable.svg)](http://npmjs.com/package/@onixjs/enumerable)

The OnixJS Enumerable Class is a wrapper for JavaScript Generators in order to provide Array alike operations such as: filter, map, reduce, every, etc.

The OnixJS Enumerable Class can be used either on TypeScript or ES6+ Projects.

# Installation

```sh
$ npm install --save @onixjs/enumerable
```

# Usage
The following are a set of examples of the operations available when wrapping a JavaScript Generator.

# List of Contents

- [Map](https://github.com/onixjs/enumerable#map)
- [Filter](https://github.com/onixjs/enumerable#filter)
- [Reduce](https://github.com/onixjs/enumerable#reduce)
- [Join](https://github.com/onixjs/enumerable#join)
- [Find](https://github.com/onixjs/enumerable#find)
- [Every](https://github.com/onixjs/enumerable#every)
- [Some](https://github.com/onixjs/enumerable#some)
- [Includes](https://github.com/onixjs/enumerable#includes)
- [To Array](https://github.com/onixjs/enumerable#to-array)

### Map
The `map()` method creates a new generator with the results of calling a provided function on every element in the calling iterable.

```js
import { Enumerable } from '@onixjs/enumerable';

function* foo() {
  yield 'Hello';
}

const EnumerableFoo = new Enumerable(foo);
const result = EnumerableFoo.map(value => `${value} World`);

console.log(result); // Expected Result: Hello World
```
### Filter
The `filter()` method creates a new generator with all elements that pass the test implemented by the provided function.

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
const result = EnumerableFoo.filter(value => value > 4);

console.log(result); // Expected Result: 5
```

### Reduce
The `reduce()` method applies a function against an accumulator and each iterated element (from top to bottom) to reduce it to a single value.

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
const result = EnumerableFoo.reduce((a, b) => a + b);

console.log(result); // Expected Result: 15
```

### Join
The `join()` method joins all elements of an iterable object into a string and returns this string.

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

console.log(EnumerableFoo.join()); // Expected Result: 1,2,3,4,5
console.log(EnumerableFoo.join(' ')); // Expected Result: 1 2 3 4 5
```

### Every
The `every()` method tests whether all elements in an iterable pass the test implemented by the provided function.

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
const result = EnumerableFoo.every(value => value < 10);

console.log(result); // Expected Result: true
```

### Some
The `some()` method tests whether at least one element in the iterator passes the test implemented by the provided function.

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
const result = EnumerableFoo.some(value => value > 4);
console.log(result); // Expected Result: true
```

### Find
The `find()` method returns the value of the first element in the iterable that satisfies the provided testing function. Otherwise undefined is returned.

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
const result = EnumerableFoo.find(value => value > 1);

console.log(result); // Expected Result: 2
```

### To Array
The `toArray()` method returns the iterated elements in an Array form.

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
const result = EnumerableFoo.toArray();

console.log(result); // Expected Result: [1, 2, 3, 4, 5]
```

# Software MIT License
Copyright (c) 2018 OnixJS - Jonathan Casarrubias <@johncasarrubias>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[MIT License](http://opensource.org/licenses/MIT)


# Contact
This module is written and maintained by Jonathan Casarrubias <t: johncasarrubias>