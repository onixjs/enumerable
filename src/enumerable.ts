import {filter} from './filter';
import {map} from './map';
import {reduce} from './reduce';
import {every} from './every';
/**
 * @class Enumerable
 * @author Jonathan Casarrubias
 * @license MIT
 * @description The OnixJS Enumerable Class is a wrapper for JavaScript Generators
 * in order to provide Array alike operations such as: filter, map, reduce, every, etc.
 */
export class Enumerable {
  /**
   * Make this class as an iterable object.
   */
  *[Symbol.iterator]() {
    yield* this.iterator;
  }
  /**
   * @constructor
   * @param iterator
   * receives an iterable generator
   */
  constructor(public iterator) {}
  /**
   * @method filter
   * @param predicate
   * The filter() method creates a new generator with all elements that
   * pass the test implemented by the provided function.
   */
  filter(predicate): Enumerable {
    this.iterator = filter(this.iterator(), predicate);
    return this;
  }
  /**
   * @method map
   * @param mapper
   * The map() method creates a new generator with the results of calling
   * a provided function on every element in the calling iterable.
   */
  map(mapper): Enumerable {
    this.iterator = map(this.iterator(), mapper);
    return this;
  }
  /**
   * @method reduce
   * @param reducer
   * The reduce() method applies a function against an accumulator and
   * each iterated element (from top to bottom) to reduce it to a single value.
   */
  reduce(reducer): Enumerable {
    this.iterator = reduce(this.iterator(), reducer);
    return this;
  }
  /**
   * @method every
   * @param threshold
   * The every() method tests whether all elements in an iterable pass the
   * test implemented by the provided function.
   */
  every(threshold): Enumerable {
    this.iterator = every(this.iterator(), threshold);
    return this;
  }
}
