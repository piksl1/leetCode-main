/* 2634. Filter Elements from Array

Given an integer array arr and a filtering function fn, return a filtered array filteredArr. */
type Fn = (n: number, i?: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  let filteredArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
console.log(
  filter([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10;
  })
);
