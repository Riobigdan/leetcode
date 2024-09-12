import { generateParenthesis, generateParenthesis2 } from "./22";
jest.useFakeTimers();
describe("22. Generate Parentheses", () => {
  const testCases = [
    { input: 1, expected: ["()"] },
    { input: 2, expected: ["(())", "()()"] },
    { input: 3, expected: ["((()))", "(()())", "(())()", "()(())", "()()()"] },
  ];

  describe("generateParenthesis", () => {
    test.each(testCases)("n = $input", ({ input, expected }) => {
      const result = generateParenthesis(input);
      expect(result).toHaveLength(expected.length);
      expect(result).toEqual(expect.arrayContaining(expected));
    });
  });

  describe("generateParenthesis2", () => {
    test.each(testCases)("n = $input", ({ input, expected }) => {
      const result = generateParenthesis2(input);
      expect(result).toHaveLength(expected.length);
      expect(result).toEqual(expect.arrayContaining(expected));
    });
  });

  test("generateParenthesis and generateParenthesis2 should produce the same results", () => {
    const n = 4;
    const result1 = generateParenthesis(n);
    const result2 = generateParenthesis2(n);
    expect(result1).toHaveLength(result2.length);
    expect(result1).toEqual(expect.arrayContaining(result2));
  });
});
