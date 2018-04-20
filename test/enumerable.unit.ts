import {test} from 'ava';
import {Enumerable} from '../src';

test('OnixJS Enumerable: Test Iterator', t => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = EnumerableFoo.filter(value => value > 3);
  t.deepEqual([...result], [4, 5]);
});

test('OnixJS Enumerable: Test toArray', t => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = EnumerableFoo.toArray();
  t.deepEqual(result, [1, 2, 3, 4, 5]);
});

test('OnixJS Enumerable: Test Filter', t => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = EnumerableFoo.filter(value => value > 4);
  t.is(result.iterator.next().value, 5);
  t.true(result.iterator.next().done);
});

test('OnixJS Enumerable: Test Map', t => {
  function* foo() {
    yield 'Hello';
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = EnumerableFoo.map(value => `${value} World`);
  t.is(result.iterator.next().value, 'Hello World');
  t.true(result.iterator.next().done);
});

test('OnixJS Enumerable: Test Join Custom Separator', t => {
  function* foo() {
    yield 'Hello';
    yield 'World';
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = EnumerableFoo.join(' ');
  t.is(result.iterator.next().value, 'Hello World');
  t.true(result.iterator.next().done);
});

test('OnixJS Enumerable: Test Join', t => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = EnumerableFoo.join();
  t.is(result.iterator.next().value, '1,2,3');
  t.true(result.iterator.next().done);
});

test('OnixJS Enumerable: Test Includes', t => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = EnumerableFoo.includes(2);
  t.true(result.iterator.next().value);
  t.true(result.iterator.next().done);
});

test('OnixJS Enumerable: Test Not Includes', t => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = EnumerableFoo.includes(5);
  t.false(result.iterator.next().value);
  t.true(result.iterator.next().done);
});

test('OnixJS Enumerable: Test Reduce', t => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = EnumerableFoo.reduce((a, b) => a + b);
  t.is(result.iterator.next().value, 15);
  t.true(result.iterator.next().done);
});

test('OnixJS Enumerable: Test Not-Predicated Reduce', t => {
  function* foo() {
    yield 1;
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = EnumerableFoo.reduce((a, b) => a + b);
  t.is(result.iterator.next().value, 1);
  t.true(result.iterator.next().done);
});

test('OnixJS Enumerable: Test Every Truthy', t => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = EnumerableFoo.every(value => value > 0);
  t.true(result.iterator.next().value);
  t.true(result.iterator.next().done);
});

test('OnixJS Enumerable: Test Every Falsy', t => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = EnumerableFoo.every(value => value > 40);
  t.false(result.iterator.next().value);
  t.true(result.iterator.next().done);
});

test('OnixJS Enumerable: Test Some Truthy', t => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = EnumerableFoo.some(value => value > 4);
  t.true(result.iterator.next().value);
  t.true(result.iterator.next().done);
});

test('OnixJS Enumerable: Test Some Falsy', t => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = EnumerableFoo.some(value => value > 5);
  t.false(result.iterator.next().value);
  t.true(result.iterator.next().done);
});

test('OnixJS Enumerable: Test Find Success', t => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = EnumerableFoo.find(value => value > 1);
  t.is(result.iterator.next().value, 2);
  t.true(result.iterator.next().done);
});

test('OnixJS Enumerable: Test Find (Not Found)', t => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = EnumerableFoo.find(value => value > 6);
  t.is(result.iterator.next().value, undefined);
  t.true(result.iterator.next().done);
});

test('OnixJS Enumerable: Test Chained Operations', t => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = EnumerableFoo.filter(value => value < 3).reduce(
    (a, b) => a + b,
  );
  t.is(result.iterator.next().value, 3);
  t.true(result.iterator.next().done);
});
