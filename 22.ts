// 22. Generate Parentheses DFS 慢速 55, 61
function generateParenthesis(n: number): string[] {
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
