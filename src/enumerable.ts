import {filter} from './filter';
import {map} from './map';
import {reduce} from './reduce';
import {every} from './every';

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

  filter(predicate): Enumerable {
    this.iterator = filter(this.iterator(), predicate);
    return this;
  }

  map(mapper): Enumerable {
    this.iterator = map(this.iterator(), mapper);
    return this;
  }

  reduce(reducer): Enumerable {
    this.iterator = reduce(this.iterator(), reducer);
    return this;
  }

  every(threshold): Enumerable {
    this.iterator = every(this.iterator(), threshold);
    return this;
  }
}
