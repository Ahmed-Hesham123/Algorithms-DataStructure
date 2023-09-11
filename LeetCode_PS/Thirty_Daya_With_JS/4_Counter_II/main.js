/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currVal = init;
  return {
      increment: () => {
          currVal++;
          return currVal;
      },
      reset: () => {
          currVal = init;
          return currVal;
      },
      decrement: () => {
          currVal--;
          return currVal;
      }
  };
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/