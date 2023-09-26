/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const res = await promise1 + await promise2;
  return res;
};

const promise1 = new Promise((resolve) => setTimeout(() => resolve(10), 50)),
  promise2 = new Promise((resolve) => setTimeout(() => resolve(-12), 30));

console.log(addTwoPromises(promise1, promise2));
/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

// Big-O = O(1) - Constant
