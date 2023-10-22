/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, millis);
  });
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
// Big-O = O(1) - Constant
