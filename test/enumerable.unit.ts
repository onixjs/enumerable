import {test} from 'ava';
import {Enumerable} from '../src';

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
  t.deepEqual([...result], [5]);
});

test('OnixJS Enumerable: Test Map', t => {
  function* foo() {
    yield 'Hello';
  }
  const EnumerableFoo = new Enumerable(foo);
  const result = <Enumerable>EnumerableFoo.map(value => `${value} World`);
  t.deepEqual([...result], ['Hello World']);
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
  t.deepEqual([...result], [15]);
});
