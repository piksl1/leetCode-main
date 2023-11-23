/* 
1630. Arithmetic Subarrays
A sequence of numbers is called arithmetic if it consists of at least two elements, and the difference between every two consecutive elements is the same. More formally, a sequence s is arithmetic if and only if s[i+1] - s[i] == s[1] - s[0] for all valid i.

 */
function checkArithmeticSubarrays(
  nums: number[],
  l: number[],
  r: number[]
): boolean[] {
  const isArithmetic = (arr: number[]): boolean => {
    const sorted = [...arr].sort((a, b) => a - b);
    return sorted
      .slice(1)
      .every((n, i) => n - sorted[i] === sorted[1] - sorted[0]);
  };

  return l.map((start, index) => {
    const subArray = nums.slice(start, r[index] + 1);
    return isArithmetic(subArray);
  });
}
console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]));
