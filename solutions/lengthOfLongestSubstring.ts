/* 3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.
*/
// Topic String 2
function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let start = 0;
  const charIndexMap = {};

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];
    if (currentChar in charIndexMap) {
      start = Math.max(start, charIndexMap[currentChar] + 1);
    }
    charIndexMap[currentChar] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("pwwkew"));
