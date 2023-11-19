/* 2635. Apply Transform Over Each Element in Array
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
*/
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  let returnedArray: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    returnedArray.push(fn(arr[i], i));
  }
  return returnedArray;
}
console.log(
  map([1, 2, 3], function plusone(n) {
    return n + 1;
  })
);
