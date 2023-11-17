//2629. Function Composition
/* Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
 */

type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    return functions.reduceRight((acc, f) => f(acc), x);
  };
}
console.log(compose([(x) => x + 1, (x) => 2 * x]));
const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9
