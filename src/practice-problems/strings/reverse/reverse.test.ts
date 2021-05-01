import { reverse, reverseBuiltin } from "./reverse";

describe("reverse", () => {
  it("should reverse a string", () => {
    const inputString = "Hello, World!";
    const reversedInputString = reverse(inputString);
    expect(reversedInputString).toMatch("!dlroW ,olleH");
  });
});

describe("reverseBuiltin", () => {
  it("should reverse a string", () => {
    const inputString = "Hello, World!";
    const reversedInputString = reverseBuiltin(inputString);
    expect(reversedInputString).toMatch("!dlroW ,olleH");
  });
});
