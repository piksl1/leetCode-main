/* 

14. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/
function longestCommonPrefix(strs: string[]): string {
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
