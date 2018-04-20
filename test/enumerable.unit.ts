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
  const result = <Enumerable>EnumerableFoo.filter(value => value > 3);
  t.deepEqual([...result], [4, 5]);
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
  const result = <Enumerable>EnumerableFoo.filter(value => value > 4);
  t.is(result.iterator.next().value, 5);
  t.true(result.iterator.next().done);
});

test('OnixJS Enumerable: Test Map', t => {
  function* foo() {
    yield 'Hello';
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = <Enumerable>EnumerableFoo.map(value => `${value} World`);
  t.is(result.iterator.next().value, 'Hello World');
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
  const result = <Enumerable>EnumerableFoo.reduce((a, b) => a + b);
  t.is(result.iterator.next().value, 15);
  t.true(result.iterator.next().done);
});

test('OnixJS Enumerable: Test Truthy', t => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = <Enumerable>EnumerableFoo.every(value => value > 0);
  t.true(result.iterator.next().value);
  t.true(result.iterator.next().done);
});

test('OnixJS Enumerable: Test Falsy', t => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = <Enumerable>EnumerableFoo.every(value => value > 40);
  t.false(result.iterator.next().value);
  t.true(result.iterator.next().done);
});
