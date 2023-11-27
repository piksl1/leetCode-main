/*13. Roman to Integer
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
*/
function romanToInt(s: string): number {
  let result = 0;
  const symbols: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < s.length; i++) {
    let currentValue = symbols[s[i]];
    let nextValue = symbols[s[i + 1]];
    if (nextValue > currentValue) {
      result += nextValue - currentValue;
      i++;
    } else {
      result += currentValue;
    }
  }
  return result;
}
console.log(romanToInt("MCMXCIV"));
