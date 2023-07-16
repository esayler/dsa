import { factorialIterative, factorial } from "./factorial";

describe("factorial - recursive implementation", () => {
  it("should return correct factorial", () => {
    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(10)).toEqual(3628800);
  });
});

describe("factorial - iterative implementation", () => {
  it("should return correct factorial", () => {
    expect(factorialIterative(0)).toEqual(1);
    expect(factorialIterative(1)).toEqual(1);
    expect(factorialIterative(2)).toEqual(2);
    expect(factorialIterative(3)).toEqual(6);
    expect(factorialIterative(10)).toEqual(3628800);
  });
});
