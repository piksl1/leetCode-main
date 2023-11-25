/*
 20. Valid Parentheses 
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

 */

// Topic String
function isValid(s: string): boolean {
  let stack: string[] = [];
  let brackets: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let char of s) {
    if (char in brackets) {
      stack.push(char);
    } else {
      let last = stack.pop();
      if (brackets[last] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(isValid("()[]{}"));
