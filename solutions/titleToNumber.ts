/*
171. Excel Sheet Column Number 
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
Topic : Math-String

 */
function titleToNumber(columnTitle: string): number {
  let result: number = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    result +=
      (columnTitle.charCodeAt(i) - 64) *
      Math.pow(26, columnTitle.length - i - 1);
  }
  return result;
}
console.log(titleToNumber("ZY"));
