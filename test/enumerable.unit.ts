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
  const EnumerableFoo = new Enumerable(foo());
  const result = <Enumerable>EnumerableFoo.filter(value => value > 4);
  t.deepEqual([...result], [5]);
});
