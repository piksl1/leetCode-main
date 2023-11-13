function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];
  let hash: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hash[complement] !== undefined) {
      result = [hash[complement], i];
      break;
    }
    hash[nums[i]] = i;
  }
  return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
