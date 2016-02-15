'use strict';

import {observable} from 'mobservable';

const counterStore = observable({
  counter: 0
});
counterStore.increment = function () {
    this.counter++;
};
counterStore.decrement = function() {
    this.counter--;
};
counterStore.incrementAsync = function() {
  setTimeout(() => {
    this.counter++;
    }, 1000);
};
module.exports = counterStore;

