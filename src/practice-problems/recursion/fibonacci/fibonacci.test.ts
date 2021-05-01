import { fibonacci, makeFibonacciSequence } from "./fibonacci";
describe("get fibonacci number by index", () => {
  it("should return 0 for index 0", () => {
    const first = fibonacci(0);
    expect(first).toEqual(0);
  });

  it("should return 13 for index 7", () => {
    const eighth = fibonacci(7);
    expect(eighth).toEqual(13);
  });

  it("should return 1 for indexes less than or equal to 2 but greater than 0", () => {
    const second = fibonacci(1);
    expect(second).toEqual(1);

    const third = fibonacci(2);
    expect(third).toEqual(1);

    const fourth = fibonacci(3);
    expect(fourth).not.toEqual(1);
  });

  it("should throw if given an index less than zero", () => {
    expect(() => {
      fibonacci(-1);
    }).toThrow();
  });
});

describe("create fibnacci sequence", () => {
  it("should return fibonacci sequence as an array of length n", () => {
    const value = makeFibonacciSequence(10);
    expect(value).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
