// 22. Generate Parentheses DFS 慢速 55, 61
export function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  function dfs(left: number, right: number, str: string, sum: number) {
    if (left === 0 && right === 0) {
      result.push(str);
      return;
    }
    if (left > 0) {
      dfs(left - 1, right, str + "(", sum + 1);
    }
    if (right > 0 && sum > 0) {
      dfs(left, right - 1, str + ")", sum - 1);
    }
  }
  dfs(n, n, "", 0);
  return result;
}

console.log(generateParenthesis(4));
// 22. Generate Parentheses DFS 去掉sum
//快速 99.15  61.45
export function generateParenthesis2(n: number): string[] {
  const result: string[] = [];
  function dfs(left: number, right: number, str: string) {
    if (left === 0 && right === 0) {
      result.push(str);
      return;
    }
    if (left > 0) {
      dfs(left - 1, right, str + "(");
    }
    if (right > left) {
      dfs(left, right - 1, str + ")");
    }
  }
  dfs(n, n, "");
  return result;
}
console.log(generateParenthesis(4));