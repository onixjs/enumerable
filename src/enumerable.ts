import {filter} from './filter';

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
  constructor(private iterator) {}

  filter<T>(predicate): T | Enumerable {
    this.iterator = filter(this.iterator, predicate);
    return this;
  }

  map() {
    return this;
  }
}
