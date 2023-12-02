/* 
389. Find the Difference
You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.
Topics :Hash Table String Bit Manipulation Sorting
*/
function findTheDifference(s: string, t: string): string {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    result ^= s.charCodeAt(i);
    result ^= t.charCodeAt(i);
  }

  result ^= t.charCodeAt(t.length - 1);

  return String.fromCharCode(result);
}
console.log(findTheDifference("abcd", "abcde"));
